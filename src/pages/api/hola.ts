export async function get() {
	console.log('request')
	return new Response(JSON.stringify({ ok: true }), {
		status: 200,
		headers: {
			"Content-Type": "application/json",
		},
	})
}