
import { NextResponse } from 'next/server';


export async function POST(request) {

    const { data } = await request.json();

 
    if (!data || typeof data !== 'string') {
        return NextResponse.json(
            { error: 'Invalid input. Please provide a string in the data field.' },
            { status: 400 }
        );
    }


    const sortedArray = data.split('').sort();


    return NextResponse.json({ word: sortedArray });
}
