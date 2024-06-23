export function Tags({ tags, className = "" }: { tags: string[], className?: string}) {
    return <div className={"flex overflow-x-auto gap-2 w-11/12 text-sm " + className} style={{ scrollbarWidth: "none" }}>
        {tags?.map((tag, index) => <div key={index} className="bg-primary-100 text-white py-1 px-2 whitespace-nowrap rounded-full">{tag}</div>
        )}
    </div>;
}
