export const createfeedback = async (id,feedbacks) => {
    const data = { feedbacks};
    console.log(data);
    
    console.log(id);
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

  export const getFeedbacks = async () => {
    const response = await fetch(
      `http://localhost:4000/api/studioDetails/feedbacks`
    );
    const info = await response.json();
    return info;
  };