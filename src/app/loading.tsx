import SkeletonCard from "@/components/SkeletonCard";

const loading = () => {
  return (
    <main>
      <div className="grid grid-cols-4 gap-4">
        {"abcdefjhi".split("").map((i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </main>
  );
};

export default loading;
