import { NextResponse } from 'next/server';
import { hubspotClient } from '../utils';


export async function POST(request) {
    const { email, firstName, lastName, phone, company, details } = await request.json();
  
    try {
      const contactObj = {
        properties: {
          email,
          firstname: firstName,
          lastname: lastName,
          phone,
          company,
          message:details, 
        },
      };
  
      const response = await hubspotClient.crm.contacts.basicApi.create(contactObj);
      console.log(response);
  
      return NextResponse.json({ message: ' message submitted successfully', response });
    } catch (error) {
      console.error('Something went wrong:', error);
      return NextResponse.json({ message: 'Something went wrong', error }, { status: 500 });
    }
  }
