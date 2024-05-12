import { MercadoPagoConfig, Preference } from "mercadopago";
import { redirect } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN! });
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SECRET!);

export default async function Home() {
  async function purchaseSong(formData: FormData) {
    "use server";

    // Asumiendo que 'recipientName' es un campo del formulario, similar a 'message'
    const recipientName = formData.get("recipientName") as string;
    const story = formData.get("message") as string;
    const mail = formData.get("recipientEmail") as string;
    const whatsapp = formData.get("recipientWhatsApp") as string;
    const countryCode = formData.get("countryCode") as string;

    // Insertar datos en la tabla 'Ventas'
    const { data, error } = await supabase
      .from('Ventas')
      .insert([
        { recipient_name: recipientName, story: story , mail: mail, whatsapp: whatsapp, countryCode: countryCode},
      ]);

    if (error) {
      throw new Error('Error al guardar la transacción en la base de datos');
    }

    const preference = await new Preference(client).create({
      body: {
        items: [
          {
            id: "cancionPersonalizada",
            title: recipientName, // Usar el recipientName como título de la canción
            quantity: 1,
            unit_price: 980, // Precio fijo para la canción personalizada
          },
        ],
      },
    });

    redirect(preference.sandbox_init_point!);
  }

  // JSX para el formulario de compra de la canción personalizada
  return (
    <>
      <form action={purchaseSong} className="mx-auto max-w-md border p-8 space-y bg-white shadow-lg rounded-lg">
        <div>
          <label htmlFor="recipientName" className="block text-sm font-medium text-gray-700 mb-2">Nombre del destinatario</label>
          <input
            id="recipientName"
            name="recipientName"
            type="text"
            className="w-full p-2 border border-gray-300 focus:ring-red-500 focus:border-red-500 rounded-md shadow-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="recipientEmail" className="block text-sm font-medium text-gray-700 mb-2">Correo de seguimiento</label>
          <input
            id="recipientEmail"
            name="recipientEmail"
            type="email"
            className="w-full p-2 border border-gray-300 focus:ring-red-500 focus:border-red-500 rounded-md shadow-sm"
            required
          />
        </div>

        <div >
    <div className="flex flex-col md:flex-row gap-2">
        <div className="flex-1 ">
            <label htmlFor="countryCode" className="block text-sm font-medium text-gray-700 mb-2">Código de país</label>
            <select id="countryCode" name="countryCode" className="w-full p-2 border border-gray-300 focus:ring-red-500 focus:border-red-500 rounded-md shadow-sm" required>
            <option value="+52">México (+52)</option>
            <option value="+1">USA (+1)</option>
            <option value="+34">España (+34)</option>
            <option value="+54">Argentina (+54)</option>
            <option value="+55">Brasil (+55)</option>
            <option value="+57">Colombia (+57)</option>
            <option value="+56">Chile (+56)</option>
            <option value="+51">Perú (+51)</option>
            <option value="+58">Venezuela (+58)</option>
            <option value="+506">Costa Rica (+506)</option>
            <option value="+507">Panamá (+507)</option>
            <option value="+591">Bolivia (+591)</option>
            <option value="+593">Ecuador (+593)</option>
            <option value="+595">Paraguay (+595)</option>
            <option value="+598">Uruguay (+598)</option>
            <option value="+502">Guatemala (+502)</option>
            <option value="+503">El Salvador (+503)</option>
            <option value="+504">Honduras (+504)</option>
            <option value="+505">Nicaragua (+505)</option>
            <option value="+509">Haití (+509)</option>
            <option value="+33">Francia (+33)</option>
            <option value="+49">Alemania (+49)</option>
            <option value="+39">Italia (+39)</option>
            <option value="+44">Reino Unido (+44)</option>
            <option value="+81">Japón (+81)</option>
            <option value="+82">Corea del Sur (+82)</option>
            <option value="+86">China (+86)</option>
            <option value="+91">India (+91)</option>
            <option value="+7">Rusia (+7)</option>
            <option value="+61">Australia (+61)</option>
            <option value="+62">Indonesia (+62)</option>
            <option value="+63">Filipinas (+63)</option>
            <option value="+64">Nueva Zelanda (+64)</option>
            <option value="+65">Singapur (+65)</option>
            <option value="+66">Tailandia (+66)</option>
            <option value="+90">Turquía (+90)</option>
            <option value="+351">Portugal (+351)</option>
            <option value="+353">Irlanda (+353)</option>
            <option value="+358">Finlandia (+358)</option>
            <option value="+359">Bulgaria (+359)</option>
            <option value="+370">Lituania (+370)</option>
            <option value="+371">Letonia (+371)</option>
            <option value="+372">Estonia (+372)</option>
            <option value="+373">Moldavia (+373)</option>
            <option value="+374">Armenia (+374)</option>
            <option value="+375">Bielorrusia (+375)</option>
            <option value="+376">Andorra (+376)</option>
            <option value="+377">Mónaco (+377)</option>
            <option value="+378">San Marino (+378)</option>
            <option value="+380">Ucrania (+380)</option>
            <option value="+381">Serbia (+381)</option>
            <option value="+382">Montenegro (+382)</option>
            <option value="+385">Croacia (+385)</option>
            <option value="+386">Eslovenia (+386)</option>
            <option value="+387">Bosnia y Herzegovina (+387)</option>
            <option value="+389">Macedonia del Norte (+389)</option>
                                
                        </select>
        </div>

              <div className="flex-0">
                  <label htmlFor="recipientWhatsApp" className="block text-sm font-medium text-gray-700 mb-2">WhatsApp</label>
                  <input
                    id="recipientWhatsApp"
                    name="recipientWhatsApp"
                    type="tel"
                    className="w-full p-2 border border-gray-300 focus:ring-red-500 focus:border-red-500 rounded-md shadow-sm"
                    placeholder="Escribe tu número"
                    pattern="^\d{10}$" 
                    required
                  />
              </div>
          </div>
      </div>




        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Tu mensaje para personalizar la canción</label>
          <textarea
            id="message"
            name="message"
            className="w-full p-2 border border-gray-300 focus:ring-red-500 focus:border-red-500 rounded-md shadow-sm"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-red-600 text-white p-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors"
        >
          Comprar canción
        </button>
      </form>
    </>
  );
}
