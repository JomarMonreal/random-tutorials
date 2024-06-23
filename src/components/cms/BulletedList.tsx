export function BulletedList({ items }: { items: string[]; }) {
  return <ul className="list-disc ml-10">
    {items?.map((item, jIndex) => <li key={jIndex}>{item}</li>
    )}
  </ul>;
}
