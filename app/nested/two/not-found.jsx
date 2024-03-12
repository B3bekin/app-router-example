import Link from "next/link";

function NotFound() {
  return(
        <div>
            <p>Not found on Page 2</p>
            <ul>
                <li className="italic"><Link href="/nested/two">Back to NESTED</Link></li>
            </ul>
        </div>
    );
}
export default NotFound;