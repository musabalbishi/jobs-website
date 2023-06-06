import { useLoaderData, useParams } from "react-router-dom";

export default function CareerDetails() {
  const { id } = useParams();
  const career = useLoaderData();

  return (
    <div className="carrer-details">
      <h2>career details for {career.title}</h2>
      <h2>career details for {career.salary}</h2>
      <h2>career details for {career.location}</h2>
    </div>
  );
}

export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch("http://localhost:4000/careers/" + id);

  return res.json();
};
