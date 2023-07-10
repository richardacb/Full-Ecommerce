import { UserButton, auth } from '@clerk/nextjs'
import ECMainNav from '@/components/ECMainNav'
import ECStoreswitcher from '@/components/ECStoreswitcher'
import { redirect } from 'next/navigation'
import prismadb from '@/lib/prismadb'

const ECNavbar = async () => {

    const { userId } = auth()

    if (!userId) {
        redirect('/sign-in')
    }

    const stores = await prismadb.store.findMany({
        where: {
            userId,
        }
    });
    
    return (
        <div className='border-b'>
            <div className='flex items-center h-16 px-4'>
                <ECStoreswitcher
                    items={stores}
                />
                <ECMainNav
                    className="mx-6"
                />
                <div className='flex items-center ml-auto space-x-4'>
                    <UserButton afterSignOutUrl='/' />
                </div>
            </div>
        </div>
    )
}

export default ECNavbar
