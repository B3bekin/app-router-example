import Link from "next/link";

function PreNestedPage() {
    return (
        <div>
            <h1 className="italic m-10">PreNestedPage</h1>
            <ul>
                <li><Link href="/nested/one">Route 1</Link></li>
                <li><Link href="/nested/two">Route 2</Link></li>
            </ul>
        </div>
    )
}
export default PreNestedPage;