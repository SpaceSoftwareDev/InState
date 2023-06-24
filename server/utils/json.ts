import fs from "fs"

export interface JsonObject {
	[key: string]: any
}

export function convertJsonLdToJson(jsonLdData: JsonObject): JsonObject {
	let json: JsonObject = {}

	for (const key in jsonLdData) {
		let value = jsonLdData[key]

		if (typeof value === 'object' && value !== null) {
			if (Array.isArray(value)) {
				value = value.map((item) => convertJsonLdToJson(item as JsonObject))
			} else {
				value = convertJsonLdToJson(value as JsonObject)
			}
		}

		const formattedKey = key.replace(/^@/, '')

		json[formattedKey] = value
	}

	delete json['id']
	delete json['context']

	if (Array.isArray(json['graph']) && json['graph'].length > 1) {
		json = json['graph'] as JsonObject
	} if (Array.isArray(json['graph']) && json['graph'].length === 1) {
		json = json['graph'][0] as JsonObject
	}

	return json
}

export function isJsonLd(jsonObject: JsonObject): boolean {
	try {
		return !!jsonObject['@context']
	} catch (e) {
		return false
	}
}