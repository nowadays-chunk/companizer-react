// src/utils/authApi.js
import api from "./apiClient";

// LOGIN – calls Express /auth/login
export const login = async (email, password) => {
  const { data } = await api.post("/auth/login", { email, password });

  const { token, user, organization } = data;

  localStorage.setItem("token", token);
  localStorage.setItem("userData", JSON.stringify(user));
  localStorage.setItem("organizationData", JSON.stringify(organization));

  return true;
};

// REGISTER ORGANIZATION – calls Express /auth/register-organization
export const registerOrganization = async ({
  orgName,
  firstName,
  lastName,
  email,
  password,
  domain,
  numUsers,
  numStores,
  totalPrice,
}) => {
  const { data } = await api.post("/auth/register-organization", {
    orgName,
    firstName,
    lastName,
    email,
    password,
    domain,
    numUsers,
    numStores,
    totalPrice,
  });

  const { token, user, organization } = data;

  localStorage.setItem("token", token);
  localStorage.setItem("userData", JSON.stringify(user));
  localStorage.setItem("organizationData", JSON.stringify(organization));

  return data;
};
