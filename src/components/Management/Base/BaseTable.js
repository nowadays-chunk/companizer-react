import React from 'react';
import { Box, Table, TableBody, Checkbox, TableCell, TableContainer, TablePagination, TableRow, Tooltip } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { IconButton } from '@mui/material';

import BaseTableHead from './BaseTableHead';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function BaseTable({
  items,
  order,
  setOrder,         // Add this to receive the prop
  orderBy,
  setOrderBy,       // Add this to receive the prop
  selected,
  setSelected,
  page,
  setPage,
  rowsPerPage,
  setRowsPerPage,
  dense,
  setDense,
  fieldConfig,
  validationRules = [], // Receive rules
  onViewItem, // New Prop
  onEditItem, // New Prop
  hasMore = false, // Added prop for pagination
}) {

  const validateRow = (row) => {
    // ... (logic remains same, validationRules uses it)
    // To save context, we just return empty array if no rules
    if (!validationRules || validationRules.length === 0) return [];

    // ... actually validateRow implementation is lengthy. 
    // I should only replace the START of the function to add props.
    // But since I am replacing the header logic too, I can do it in chunks.


    // ... (Assuming validateRow is unchanged, I will skip replacing it if possible)
    // But I need to add props to the destructuring at the TOP. 
    // And fix the BaseTableHead usage at the BOTTOM.

    // Let's do 2 chunks.

    // CHUNK 1: Props
    // CHUNK 2: Header Logic

    const issues = [];
    const relevantRules = validationRules.filter(r =>
      r.current_step === row.processing_step || r.current_step === '*'
    );

    relevantRules.forEach(rule => {
      let isValid = true;
      const val = row[rule.rule_value] ?? row[rule.action_name]; // Try rule_value as field name, fallback to action? 
      // Wait, rule_value is likely the field Name (e.g. 'total_price'). 
      // But for 'value_greater_than', we need a Value to compare against.
      // The current schema has `rule_value` as ONE column. 
      // For comparisons we need Target Field AND Target Value.
      // Current schema: rule_value "e.g. invoice_number (for required field) or total_amount < 5000"
      // If the user inputs "total_amount 5000" in rule_value, we need to parse it?
      // The User Request said "logical rule to a column... predefined in fieldsConfig... "

      // Let's assume standard parsing or just check 'required_field' for now to be safe, 
      // AND implement basic 'value comparisons' assuming rule_value holds the Reference Value 
      // and we need another field for "Target Column"? 
      // The schema in entity_workflow_rules doesn't have "Target Column". 
      // It has "rule_value". 
      // Maybe `rule_value` holds "ColumnName,TargetValue"? 
      // Or maybe I should interpret `action_name` as "Column Name" for these rules?
      // Re-reading config: `action_name` label "Action Name". `rule_value` label "Rule Value / Condition".

      // Heuristic:
      // Rule Type: "value_greater_than"
      // Action Name: "total_price" (The column to check)
      // Rule Value: "1000" (The threshold)

      const columnToCheck = rule.action_name;
      const threshold = rule.rule_value;
      const rowValue = row[columnToCheck];

      switch (rule.rule_type) {
        case 'required_field':
          // here columnToCheck is the field
          if (!rowValue && rowValue !== 0) isValid = false;
          break;
        case 'value_equals':
          if (String(rowValue) !== String(threshold)) isValid = false;
          break;
        case 'value_less_than':
          if (Number(rowValue) >= Number(threshold)) isValid = false;
          break;
        case 'value_greater_than':
          if (Number(rowValue) <= Number(threshold)) isValid = false;
          break;
        case 'value_between':
          const [min, max] = threshold.split(',').map(Number);
          if (Number(rowValue) < min || Number(rowValue) > max) isValid = false;
          break;
        // Approvals - mock check for field existence or specific value
        case 'approval_email':
        case 'approval_manager':
          // Assume we check if 'approved_by' is set?
          if (!row['accountable_id']) isValid = false; // logic placeholder
          break;
        default:
          break;
      }

      if (!isValid) {
        issues.push(rule.error_message || `Validation failed: ${rule.rule_type} on ${columnToCheck}`);
      }
    });
    return issues;
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = items.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - items.length) : 0;

  const visibleRows = React.useMemo(() => stableSort(items, getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage), [items, order, orderBy, page, rowsPerPage]);

  return (
    <Box>
      <TableContainer>
        <Table sx={{ minWidth: 750 }} size={dense ? 'small' : 'medium'}>
          <BaseTableHead
            headCells={[
              ...Object.keys(fieldConfig).map((key) => ({
                id: key,
                label: fieldConfig[key].label,
              }))
            ]}
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            onSelectAllClick={handleSelectAllClick}
            numSelected={selected.length}
            rowCount={items.length}
          />
          <TableBody>
            {visibleRows.map((row, index) => {
              const isItemSelected = isSelected(row.id);
              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <TableRow
                  hover
                  onClick={(event) => handleClick(event, row.id)}
                  role="checkbox"
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={row.id}
                  selected={isItemSelected}
                >
                  <TableCell padding="checkbox">
                    <Box display="flex" alignItems="center">
                      <Checkbox color="primary" checked={isItemSelected} inputProps={{ 'aria-labelledby': labelId }} />
                      {validateRow(row).length > 0 && (
                        <Tooltip title={validateRow(row).join('\n')}>
                          <WarningIcon color="error" fontSize="small" />
                        </Tooltip>
                      )}
                    </Box>
                  </TableCell>

                  {Object.keys(fieldConfig).map((field) => (
                    <TableCell
                      size="medium"
                      key={field}
                      align={fieldConfig[field].numeric ? 'right' : 'left'}
                      sx={{ maxWidth: 300, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} // Set maxWidth and text overflow styles
                    >
                      {row[field]}
                    </TableCell>
                  ))}

                </TableRow>
              );
            })}
            {emptyRows > 0 && (
              <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[15, 25, 50]}
        component="div"
        // If we have more data, pretend we have at least one more page
        count={hasMore ? items.length + 1 : items.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
}
export default BaseTable;
