export const feedback = async (feedbacks) => {
    const data = { feedbacks};
    console.log(data);
    const response = await fetch(
      `http://localhost:4000/api/studioDetails/feedback/${id}`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      }
    );
    const info = await response.json();
    console.log(info);
    return info;
  };