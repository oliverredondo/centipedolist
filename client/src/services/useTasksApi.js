export async function getTasks(setTasks) {
  const url = "https://centipedolist.vercel.app/tasks";
  try {
    const res = await fetch(url, {
      method: "GET",
      // withCredentials: true,
      // credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error(`HTTP error: ${res.status}`);
    }
    const tasks = await res.json();
    setTasks(tasks);
  } catch (error) {
    console.error(error);
    // Handle the error in your UI here
  }
}

export async function deleteTask(task_id, fetchTasks) {
  const url = "https://centipedolist.vercel.app/task";
  const task_id_json = { task_id: task_id };
  try {
    const res = await fetch(url, {
      method: "DELETE",
      withCredentials: true,
      body: JSON.stringify(task_id_json),
      // credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error(`HTTP error: ${res.status}`);
    }
    fetchTasks();
  } catch (error) {
    console.error(error);
    // Handle the error in your UI here
  }
}

export async function editTask(task_id, fetchTasks, task) {
  const url = "https://centipedolist.vercel.app/task";
  try {
    const res = await fetch(url, {
      method: "PUT",
      // withCredentials: true,
      // credentials: "include",
      body: JSON.stringify({ task_id: task_id, task: task }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error(`HTTP error: ${res.status}`);
    }
    fetchTasks();
  } catch (error) {
    console.error(error);
    // Handle the error in your UI here
  }
}

export async function addTask(name, task, fetchTasks) {
  const url = "https://centipedolist.vercel.app/task";
  try {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify({ task: task, username: name }),
      // withCredentials: true,
      // credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error(`HTTP error: ${res.status}`);
    }
    fetchTasks();
    console.log("added task");
  } catch (error) {
    console.error(error);
    // Handle the error in your UI here
  }
}
