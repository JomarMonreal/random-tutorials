import { Button } from '@mui/material'
 
export default function NotFound() {
    return (
    <div className='h-96 flex flex-col items-center justify-center text-primary-100'>
        <h2>Not Found</h2>
        <p className='pb-4'>Could not find requested resource</p>
        <Button variant='outlined' href="/" className="button-default">
            Return Home
        </Button>
    </div>
    )
}