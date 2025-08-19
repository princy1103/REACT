export const getUsers = async () => {
  const response = await fetch("http://localhost:3000/users");
  if (!response.ok) throw new Error("Failed to fetch users");
  return response.json();
};

export const adduser = async (user) => {
  const response = await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return response.json();
};

export const deleteUser = async (id) => {
  await fetch(`http://localhost:3000/users/${id}`, {
    method: "DELETE",
  });
};

export const updateUser = async (id, user) => {
  const response = await fetch(`http://localhost:3000/users/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return response.json();
};