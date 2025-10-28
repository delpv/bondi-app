import { useParams } from "react-router";

export default function ActivityDetail() {
  const { id } = useParams(); 
    return <h1>Activity Detail Page - Activity ID: {id}</h1>;
}