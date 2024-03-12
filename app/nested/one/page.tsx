import Link from "next/link";

function nestedOnePage() {
    return (
        <div>
            <div className="italic m-10">
                this one is NESSTED and its for number 1
            </div>
            <Link href="/nested">Go back</Link>
        </div>
    )
}
    export default nestedOnePage;