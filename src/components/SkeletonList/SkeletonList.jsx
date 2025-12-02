import { SkeletonCard } from "../SkeletonCard/SkeletonCard";
import "./SkeletonList.css";

export const SkeletonList = ({ count = 6 }) => {
  return (
    <div className="skeleton-list">
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
};