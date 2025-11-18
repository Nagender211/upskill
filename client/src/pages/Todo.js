import React, { useEffect, useState } from "react";
import { api } from "../utils/api";
import Header from '../componets/Header'

const listofStatus = [
  { id: 1, status: "Todo" },
  { id: 2, status: "Next Batch" },
  { id: 3, status: "Inprogress" },
  { id: 4, status: "On-Hold/Testing" },
  { id: 5, status: "Completed" },
];

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState(listofStatus[0].status);

  // editing state
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editStatus, setEditStatus] = useState(listofStatus[0].status);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const res = await api.get("/all-todo");
      const raw = res.data?.data ?? [];
      const normalized = raw.map((t) => ({
        ...t,
        status: t.status ?? t.sattus ?? t.state ?? "No status",
      }));
      setTodos(normalized);
    } catch (err) {
      console.error("fetchTodos error:", err);
    }
  };

  const handleTodo = async (e) => {
    e.preventDefault();
    if (!title.trim()) return alert("Please enter a todo title");

    try {
      const payload = { title: title.trim(), status };
      const response = await api.post("/todo", payload);
      const returned = response.data?.data ?? response.data;

      // prefer server-returned todo object, otherwise build one
      const created = returned && (returned._id || returned.id)
        ? {
            _id: returned._id ?? returned.id,
            title: returned.title ?? payload.title,
            status: returned.status ?? payload.status,
          }
        : {
            // fallback
            _id: (Math.random() + Date.now()).toString(36),
            title: payload.title,
            status: payload.status,
          };

      setTodos((prev) => [created, ...prev]);
      setTitle("");
      setStatus(listofStatus[0].status);
    } catch (err) {
      console.error("create todo error:", err);
      alert("Failed to add todo");
    }
  };

  const startEdit = (todo) => {
    setEditingId(todo._id ?? todo.id);
    setEditTitle(todo.title);
    setEditStatus(todo.status ?? listofStatus[0].status);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditTitle("");
    setEditStatus(listofStatus[0].status);
  };

  const submitEdit = async (id) => {
    if (!editTitle.trim()) return alert("Title required");
    try {
      const payload = { title: editTitle.trim(), status: editStatus };
      const res = await api.put(`/updateTodo/${id}`, payload);
      const updated = res.data?.data ?? res.data;

      // update UI
      setTodos((prev) => prev.map((t) => ( (t._id ?? t.id) === id ? { ...t, title: updated.title ?? payload.title, status: updated.status ?? payload.status } : t )));
      cancelEdit();
    } catch (err) {
      console.error("update error:", err);
      alert("Failed to update");
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/deletTodo/${id}`);
      setTodos((prev) => prev.filter((t) => (t._id ?? t.id) !== id));
    } catch (err) {
      console.error("delete error:", err);
      alert("Failed to delete");
    }
  };

  return (
    <div className="mx-auto">
      <Header className="!pt-0" />
      <form onSubmit={handleTodo} className="bg-white shadow-sm rounded-lg p-4 sm:flex sm:items-center sm:gap-4 px-10">
        <input
          className="w-full sm:flex-1 px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
          placeholder="Enter your todo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="mt-3 sm:mt-0 sm:ml-2 px-3 py-2 border border-gray-200 rounded-md focus:outline-none max-sm:w-full"
        >
          {listofStatus.map((item) => (
            <option key={item.id} value={item.status}>
              {item.status}
            </option>
          ))}
        </select>

        <button type="submit" className="mt-3 sm:mt-0 sm:ml-2 inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
          Add
        </button>
      </form>

      <div className="mt-6 space-y-3 px-10 pb-10">
        {todos.length === 0 && <p className="text-center text-gray-500">No todos yet.</p>}

        {todos.map((item) => {
          const id = item._id ?? item.id;
          const isEditing = editingId === id;

          return (
            <div key={id} className="flex items-center justify-between max-sm:flex-col-reverse max-sm:items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="w-full sm:w-auto">
                {!isEditing ? (
                  <>
                    <h3 className="text-sm font-medium text-gray-900">{item.title}</h3>
                    {/* <p className="mt-1 text-xs text-gray-500">{id}</p> */}
                  </>
                ) : (
                  <div className="space-y-2">
                    <input
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-200 rounded-md"
                    />
                    <select value={editStatus} onChange={(e) => setEditStatus(e.target.value)} className="px-3 py-2 border border-gray-200 rounded-md">
                      {listofStatus.map((s) => (
                        <option key={s.id} value={s.status}>
                          {s.status}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

              <div className="flex justify-between gap-5 sm:justify-end w-full sm:w-auto mt-3 sm:mt-0">
                <div className="flex items-center gap-3">
                  <span className="text-xs italic text-gray-700">{item.status || "No status"}</span>
                  <div
                    className={`h-3 w-3 rounded-full ${
                      item.status === "Completed"
                        ? "bg-emerald-500"
                        : item.status === "Inprogress"
                        ? "bg-yellow-400"
                        : item.status === "On-Hold/Testing"
                        ? "bg-orange-400"
                        : "bg-gray-300"
                    }`}
                    aria-hidden
                  />
                </div>

                <div className="flex gap-2">
                  {!isEditing ? (
                    <>
                      <button onClick={() => startEdit(item)} className="px-4 py-2 bg-green-500 text-white rounded-md">Edit</button>
                      <button onClick={() => handleDelete(id)} className="px-4 py-2 bg-red-500 text-white rounded-md">Delete</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => submitEdit(id)} className="px-4 py-2 bg-indigo-600 text-white rounded-md">Save</button>
                      <button onClick={cancelEdit} className="px-4 py-2 bg-gray-300 text-black rounded-md">Cancel</button>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
