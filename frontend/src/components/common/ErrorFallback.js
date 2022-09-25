export default function ErrorFallback({ error }) {
  console.log(error);
  return (
    <div className="p-5 text-red-500 bg-red-100 rounded-lg">
      Look like component is error
    </div>
  );
}
