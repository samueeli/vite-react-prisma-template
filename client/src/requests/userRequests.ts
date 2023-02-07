const URL = `${import.meta.env.VITE_API_URL}/users`;

const getUsers = async () => {
  try {
    const res = await fetch(URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const usersRes = await res.json();
    return usersRes;
  } catch (error) {
    console.error(error);
  }
};

const addUser = async (userInput: string) => {
  try {
    const res = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: userInput }),
    });
  } catch (error) {
    console.error(error);
  }
};

const deleteUser = async (id: string) => {
  try {
    const res = await fetch(`${URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export { getUsers, addUser, deleteUser };
