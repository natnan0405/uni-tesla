export default {
	data() {
		return {
			// 默认的全局分享内容
			share: {
				title: '有事找超人',
				path: '/pages/index/index', // 全局分享的路径，比如 首页
				imageUrl: '', // 全局分享的图片(可本地可网络)
				desc: '代码是写给人看的',
				content: ''
			}
		}
	},
	//监听用户点击页面内转发按钮--分享给朋友
	onShareAppMessage(res) {
		return {
			title: this.share.title,
			path: this.share.path,
			imageUrl: this.share.imageUrl,
			desc: this.share.desc,
			content: this.share.content,
			success(res) {
				uni.showToast({
					title: '分享成功'
				})
			},
			fail(res) {
				uni.showToast({
					title: '分享失败',
					icon: 'none'
				})
			}
		}
	},

	// 监听用户点击页面内转发按钮--分享到朋友圈
	onShareTimeline(res) {
		return {
			title: this.share.title,
			path: this.share.path,
			imageUrl: this.share.imageUrl,
			desc: this.share.desc,
			content: this.share.content,
			success(res) {
				uni.showToast({
					title: '分享成功'
				})
			},
			fail(res) {
				uni.showToast({
					title: '分享失败',
					icon: 'none'
				})
			}
		}
	}
}