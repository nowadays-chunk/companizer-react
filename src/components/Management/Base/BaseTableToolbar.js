import React from 'react';
import {
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
  Box,
  Button,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import CalculateIcon from '@mui/icons-material/Calculate';
import ScienceIcon from '@mui/icons-material/Science';
import { useTranslation } from '../../../contexts/TranslationProvider';
import { useNavigate } from 'react-router-dom';

const ICON_MAP = {
  Calculate: CalculateIcon,
  Science: ScienceIcon,
};

export default function BaseTableToolbar({
  numSelected,
  onAdd,
  onDelete,
  onEdit,
  onGenerateRandomRow,
  onViewItem,
  onConfigure,
  entityName,
  modules,
}) {
  const navigate = useNavigate();

  // Filter for General type modules (appear on list view)
  const generalModules = modules?.filter(m => m.type === 'General') || [];

  return (
    <Toolbar sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Typography
        sx={{ flex: '1 1 100%' }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        {entityName}
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2 }}>{/* Added mt: 2 for separation */}
        {/* Edit / Delete / Add */}
        {numSelected > 0 && (
          <>
            {numSelected !== 1 ? (
              <IconButton onClick={onEdit} disabled>
                <EditIcon />
              </IconButton>
            ) : (
              <Tooltip title="Edit">
                <IconButton onClick={onEdit}>
                  <EditIcon />
                </IconButton>
              </Tooltip>
            )}
            <Tooltip title="Delete">
              <IconButton onClick={onDelete}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </>
        )}

        <Tooltip title="Add">
          <IconButton onClick={onAdd}>
            <AddIcon />
          </IconButton>
        </Tooltip>

        {/* Extra actions on the SAME LINE */}
        <Button
          onClick={onGenerateRandomRow}
          variant="contained"
          color="primary"
          sx={{ ml: 1 }}
        >
          Generate
        </Button>

        <Button
          onClick={onViewItem}
          variant="outlined"
          color="primary"
          sx={{ ml: 1 }}
        >
          View
        </Button>

        {/* General Modules (e.g., Calculator) */}
        {generalModules.map((module, idx) => {
          const Icon = ICON_MAP[module.icon] || CalculateIcon;
          return (
            <Button
              key={idx}
              onClick={() => navigate(module.path)}
              variant="outlined"
              color="info"
              startIcon={<Icon />}
              sx={{ ml: 1 }}
            >
              {module.name}
            </Button>
          );
        })}

        {/* Configure Workflow Rules */}
        {onConfigure && (
          <Button
            onClick={onConfigure}
            variant="outlined"
            color="secondary"
            sx={{ ml: 1 }}
          >
            Configure
          </Button>
        )}
      </Box>
    </Toolbar>
  );
}
