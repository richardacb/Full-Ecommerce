import prismadb from "@/lib/prismadb"
import BillboardForm from "./components/BillboardForm"

const BillboardId = async ({ params }: { params: { billboardId: string } }) => {

    const billboard = await prismadb.billboard.findUnique({
        where: {
            id: params.billboardId
        }
    })
    return (
        <div className="flex-col">
            <div className="flex-1 p-8 pt-6 space-y-4">
                <BillboardForm
                    initialData={billboard}
                />
            </div>
        </div>
    )
}

export default BillboardId

//TODO: i was working in the 3:47:10 hours form the video
