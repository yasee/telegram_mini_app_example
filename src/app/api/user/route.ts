import { validateWebAppData } from "@grammyjs/validator";

export async function POST(request: Request) {
    const res = await request.json();
    const initDataParams = new URLSearchParams(res.initData);

    // You can get the bot token from the environment variables
    const botToken = process.env.TELEGRAM_API_TOKEN ?? "";

    // Validate the initData
    if (validateWebAppData(botToken, initDataParams)) {
        // Parse the user data
        const user = JSON.parse(decodeURI(initDataParams.get("user") ?? ""));

        return Response.json({
            success: true,
            message: `Hello ${user.first_name} ${user.last_name}!`,
        });
    } else {
        // Return an error if the data is invalid
        return Response.json({
            success: false,
            message: "Invalid data",
        });
    }
}
