import config from './config.js'
export function request(url, data, method='GET'){
	return new Promise((resolve, reject) => {
		uni.request({
			url: config.host + config.basePath + url,
			data,
			method,
			success: (res) => {
				resolve(res.data)
			},
			fail: (error) => {
				reject(error);
			}
		})
	})
}

