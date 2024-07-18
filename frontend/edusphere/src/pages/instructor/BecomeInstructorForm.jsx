import React from 'react'

export const BecomeInstructorForm = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full mt-28 py-20'>
            <h1 className='text-4xl font-medium lg:-mt-20'>Fill the Form to Apply</h1>
            <form className='w-full max-w-2xl'>
                <div className='w-full pt-5'>
                    <h1 className='text-xl py-3'>Select the Subject you will teach</h1>
                    <hr />
                    <select className='w-full border rounded px-3 py-2'>
                        {/* Options go here */}
                    </select>
                    <div className='text-red-500'>Error message</div>
                </div>
                <div className='w-full pt-5'>
                    <h1 className='text-xl py-3'>Profile Description</h1>
                    <hr />
                    <textarea
                        placeholder='Enter your profile description...'
                        className='w-full border rounded px-3 py-2'
                    />
                    <div className='text-red-500'>Error message</div>
                </div>
                <div className='w-full pt-5'>
                    <h1 className='text-xl py-3'>GitHub Link (Optional)</h1>
                    <hr />
                    <input
                        type='url'
                        placeholder='Enter your GitHub link (optional)...'
                        className='w-full border rounded px-3 py-2'
                    />
                    <div className='text-red-500'>Error message</div>
                </div>
                <div className='w-full pt-5'>
                    <h1 className='text-xl py-3'>LinkedIn Profile Link (Optional)</h1>
                    <hr />
                    <input
                        type='url'
                        placeholder='Enter your LinkedIn profile link (optional)...'
                        className='w-full border rounded px-3 py-2'
                    />
                    <div className='text-red-500'>Error message</div>
                </div>
                <div className='w-full pt-5 grid grid-cols-2 gap-4'>
                    <div>
                        <h1 className='text-xl py-3'>House Name</h1>
                        <hr />
                        <input
                            type='text'
                            placeholder='Enter your house name...'
                            className='w-full border rounded px-3 py-2'
                        />
                        <div className='text-red-500'>Error message</div>
                    </div>
                    <div>
                        <h1 className='text-xl py-3'>Post</h1>
                        <hr />
                        <input
                            type='text'
                            placeholder='Enter your post...'
                            className='w-full border rounded px-3 py-2'
                        />
                        <div className='text-red-500'>Error message</div>
                    </div>
                </div>
                <div className='w-full pt-5 grid grid-cols-2 gap-4'>
                    <div>
                        <h1 className='text-xl py-3'>Street</h1>
                        <hr />
                        <input
                            type='text'
                            placeholder='Enter your street...'
                            className='w-full border rounded px-3 py-2'
                        />
                        <div className='text-red-500'>Error message</div>
                    </div>
                    <div>
                        <h1 className='text-xl py-3'>Country</h1>
                        <hr />
                        <input
                            type='text'
                            placeholder='Enter your country...'
                            className='w-full border rounded px-3 py-2'
                        />
                        <div className='text-red-500'>Error message</div>
                    </div>
                </div>
                <div className='w-full pt-5 grid grid-cols-2 gap-4'>
                    <div>
                        <h1 className='text-xl py-3'>State</h1>
                        <hr />
                        <input
                            type='text'
                            placeholder='Enter your state...'
                            className='w-full border rounded px-3 py-2'
                        />
                        <div className='text-red-500'>Error message</div>
                    </div>
                    <div>
                        <h1 className='text-xl py-3'>District</h1>
                        <hr />
                        <input
                            type='text'
                            placeholder='Enter your district...'
                            className='w-full border rounded px-3 py-2'
                        />
                        <div className='text-red-500'>Error message</div>
                    </div>
                </div>
                <div className='w-full pt-5'>
                    <h1 className='text-xl py-3'>Upload ID Proof</h1>
                    <hr />
                    <input
                        type='file'
                        accept='image/*'
                        className='w-full border rounded px-3 py-2'
                    />
                </div>
                <div className='w-full pt-5'>
                    <h1 className='text-xl py-3'>Upload Qualification Proof</h1>
                    <hr />
                    <input
                        type='file'
                        accept='image/*'
                        className='w-full border rounded px-3 py-2'
                    />
                </div>
                <button type='submit' className='mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                    Submit
                </button>
            </form>
        </div>

    )
}
