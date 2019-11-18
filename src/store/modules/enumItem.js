// initial state
const state = {
  user: {
    sexEnum: [{ key: 1, value: '男' }, { key: 2, value: '女' }],
    statusEnum: [{ key: 1, value: '启用' }, { key: 2, value: '禁用' }],
    levelEnum: [{ key: 1, value: '大一' }, { key: 2, value: '大二' }, { key: 3, value: '大三' }, { key: 4, value: '大四' }],
    roleEnum: [{ key: 1, value: '学生' }, { key: 2, value: '教师' }, { key: 3, value: '管理员' }],
    statusTag: [{ key: 1, value: 'success' }, { key: 2, value: 'danger' }],
    statusBtn: [{ key: 1, value: '禁用' }, { key: 2, value: '启用' }]
  },
  exam: {
    examPaper: {
      paperTypeEnum: [{ key: 1, value: '固定试卷' }, { key: 4, value: '时段试卷' }, { key: 6, value: '任务试卷' }]
    },
    question: {
      typeEnum: [{ key: 1, value: '单选题' }, { key: 2, value: '判断题' }, { key: 3, value: '填空题' }, { key: 4, value: '化简计算题' }, { key: 5, value: '画图题' }, { key: 6, value: '综合应用题' }, { key: 7, value: '分析与设计' }, { key: 8, value: '多选题' }],
      editUrlEnum: [{ key: 1, value: '/exam/question/edit/singleChoice', name: '单选题' },
        { key: 2, value: '/exam/question/edit/trueFalse', name: '判断题' },
        { key: 3, value: '/exam/question/edit/gapFilling', name: '填空题' },
        { key: 4, value: '/exam/question/edit/shortAnswer', name: '计算题' },
        { key: 5, value: '/exam/question/edit/simplifiedCalculation', name: '画图题' },
        { key: 6, value: '/exam/question/edit/integratedApplication', name: '应用题' },
        { key: 7, value: '/exam/question/edit/analysisAndDesign', name: '设计题' },
        { key: 8, value: '/exam/question/edit/multipleChoice', name: '多选题' }]
    }
  }
}

// getters
const getters = {
  enumFormat: (state) => (arrary, key) => {
    return format(arrary, key)
  }
}

// actions
const actions = {}

// mutations
const mutations = {}

const format = function (array, key) {
  for (let item of array) {
    if (item.key === key) {
      return item.value
    }
  }
  return null
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
