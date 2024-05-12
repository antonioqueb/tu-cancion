import type {NextRequest} from "next/server";

import {MercadoPagoConfig, Payment} from "mercadopago";

const mercadopago = new MercadoPagoConfig({accessToken: process.env.MP_ACCESS_TOKEN!});

export async function POST(request: NextRequest) {
  const body = await request.json().then((data) => data as {data: {id: string}});

  const payment = await new Payment(mercadopago).get({id: body.data.id});

  const donation = {
    id: payment.id,
    amount: payment.transaction_amount,
    message: payment.description,
  };

  await console.log(donation);

  return Response.json({success: true});
}