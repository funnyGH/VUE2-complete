export default {
  defaultHost: {
    'debug': '',
    'test': 'http://test.com',
    'huidu': '//huidu',
    'prod': '//prod'
  },
  apis: {
    // 测试接口环境
    'getInitApi': {
      'host': {
        'test': 'http://test.com',
        'huidu': '//huidu',
        'prod': '//prod'
      },
      'serve': 'welcome.json',
      'path': '/getQrCode'
    }
  }
}
