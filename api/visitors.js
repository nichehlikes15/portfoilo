import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export default async function handler(req, res) {
    try {
        if (req.method === "GET") {
            const count = (await redis.get("portfolio:visitors")) || 0;

            return res.status(200).json({
                count,
            });
        }

        if (req.method === "POST") {
            const count = await redis.incr("portfolio:visitors");

            return res.status(200).json({
                count,
            });
        }

        return res.status(405).json({
            error: "Method not allowed",
        });
    } catch (error) {
        console.error("Visitor counter error:", error);

        return res.status(500).json({
            error: "Failed to update visitor count",
        });
    }
}