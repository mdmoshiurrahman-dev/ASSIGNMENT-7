'use client'
import { toast } from "react-toastify";

const Page = () => {
    
    return <div>
        <button className="btn" onClick={()=> toast.success('success')}>show toast</button>
    </div>
}

export default Page;