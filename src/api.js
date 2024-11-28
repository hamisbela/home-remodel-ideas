import Together from 'together-ai';

const together = new Together({ 
    apiKey: import.meta.env.VITE_TOGETHER_API_KEY 
});

export async function generateImage(prompt) {
    try {
        const response = await together.images.create({
            model: "black-forest-labs/FLUX.1-schnell-Free",
            prompt: `photorealistic home remodel visualization, professional architectural interior and exterior, ${prompt}, perfect lighting and composition, ultra high quality home renovation design, 8k resolution, architectural photography style, interior design magazine quality, wide angle view, emphasis on renovation details, modern home improvements, and architectural elements`,
            width: 1024,
            height: 1024,
            steps: 4,
            n: 1,
            response_format: "b64_json"
        });
        
        return response.data[0].b64_json;
    } catch (error) {
        console.error('Error generating home remodel design:', error);
        throw error;
    }
}