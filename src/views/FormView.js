import React, { useEffect, useRef } from "react";

function readFile(inputFileElement) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(inputFileElement.files[0]);
  });
}

export default function FormView({ initialValues, viaProps = false }) {
  const titleRef = useRef();
  const dateRef = useRef();
  const userIdRef = useRef();
  const avatarRef = useRef();

  useEffect(() => {
    if (
      initialValues &&
      titleRef.current &&
      dateRef.current &&
      userIdRef.current &&
      avatarRef.current
    ) {
      titleRef.current.value = initialValues.title;
      dateRef.current.value = initialValues.date;
      userIdRef.current.value = initialValues.userId;
      avatarRef.current.addEventListener("change", (e) => {
        readFile(e.target).then((result) => {
          console.log(result);
        });
      });
    }
  }, [
    initialValues,
    titleRef.current,
    dateRef.current,
    userIdRef.current,
    avatarRef.current,
  ]);

  function handleSubmit(e) {
    console.log(Object.fromEntries(new FormData(e.currentTarget)));
  }

  if (viaProps)
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input name="title" value={initialValues.title} />
          <input name="date" type="date" value={initialValues.date} />
          <input name="userId" type="hidden" value={initialValues.userId} />
          <input type="submit" value="Add" />
        </form>
      </div>
    );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={titleRef} name="title" />
        <input ref={dateRef} name="date" type="date" />
        <select ref={userIdRef} name="userId">
          <option value="1">User 1</option>
          <option value="2">User 2</option>
          <option value="3">User 3</option>
        </select>
        <input ref={avatarRef} name="avatar" type="file" />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}
