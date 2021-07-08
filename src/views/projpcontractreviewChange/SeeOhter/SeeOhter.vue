<template>
  <div>
    <div class="title title-content">其他</div>
    <van-field
      type="text"
      v-model="contractList.linkman"
      :class="oldContractList && contractList.linkman !== oldContractList.linkman ? 'app-sino-change-back' : ''"
      label="客户联系人"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.linkman }}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      v-model="contractList.phone"
      :class="oldContractList && contractList.phone !== oldContractList.phone ? 'app-sino-change-back' : ''"
      label="联系人电话"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.phone }}</div>
      </template>
    </van-field>
    <van-field
      name="radio"
      label="是否有销售合同文件"
      v-model="contractList.hasContract"
      :class="oldContractList && contractList.hasContract !== oldContractList.hasContract ? 'app-sino-change-back' : ''"
      readonly
      colon
    >
      <template #input>
        <div v-if="contractList.hasContract === '1'" style="margin: 0">是</div>
        <div v-else-if="contractList.hasContract === '0'" style="margin: 0">否</div>
        <div v-else style="margin: 0">暂无</div>
      </template>
    </van-field>

    <van-field
      name="radio"
      label="是否签订合同"
      colon
      v-model="contractList.isContract"
      :class="oldContractList && contractList.isContract !== oldContractList.isContract ? 'app-sino-change-back' : ''"
      readonly
    >
      <template #input>
        <div v-if="contractList.isContract === '1'" style="margin: 0">是</div>
        <div v-else style="margin: 0">否</div>
      </template>
    </van-field>
    <van-field
      name="radio"
      label="是否是涉税合同（包含混合销售，技术开发，自有软件类合同）"
      colon
      v-model="contractList.isMixed"
      :class="oldContractList && contractList.isMixed !== oldContractList.isMixed ? 'app-sino-change-back' : ''"
      readonly
    >
      <template #input>
        <div v-if="contractList.isMixed === '1'" style="margin: 0">是</div>
        <div v-else style="margin: 0">否</div>
      </template>
    </van-field>
    <van-field
      name="radio"
      label="是否提前下单"
      colon
      v-model="contractList.hasAdvanceOrder"
      :class="oldContractList && contractList.hasAdvanceOrder !== oldContractList.hasAdvanceOrder ? 'app-sino-change-back' : ''"
      readonly
    >
      <template #input>
        <div v-if="contractList.hasAdvanceOrder === '1'" style="margin: 0">是</div>
        <div v-else style="margin: 0">否</div>
      </template>
    </van-field>
    <van-field
      name="radio"
      label="是否提前发货"
      colon
      v-model="contractList.hasAdvanceSend"
      :class="oldContractList && contractList.hasAdvanceSend !== oldContractList.hasAdvanceSend ? 'app-sino-change-back' : ''"
      readonly
    >
      <template #input>
        <div v-if="contractList.hasAdvanceSend === '1'" style="margin: 0">是</div>
        <div v-else style="margin: 0">否</div>
      </template>
    </van-field>
    <van-field
      v-if="isCustPro && custProList && custProList.length > 0"
      readonly
      clickable
      right-icon="arrow-down"
      label="客户属性"
      colon
      :value="contractList.custProDesc"
      placeholder="请选择"
      :rules="[{ required: hasRequired, message: '客户属性是必选字段' }]"
      @click="showPicker = true"
    />
    <van-popup v-model="showPicker" round position="bottom" v-if="isCustPro && custProList && custProList.length > 0">
      <van-picker show-toolbar :columns="custProList" @cancel="showPicker = false" @confirm="onConfirm" />
    </van-popup>
    <van-field
      readonly
      v-if="isCustProShow"
      label="客户属性"
      colon
      v-model="contractList.custProDesc"
      :class="oldContractList && contractList.custProDesc !== oldContractList.custProDesc ? 'app-sino-change-back' : ''"
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.custProDesc }}</div>
      </template>
    </van-field>
    <van-field
      name="radio"
      label="是否合作项目"
      colon
      v-model="contractList.hasCooperation"
      :class="oldContractList && contractList.hasCooperation !== oldContractList.hasCooperation ? 'app-sino-change-back' : ''"
      readonly
    >
      <template #input>
        <div v-if="contractList.hasCooperation === '1'" style="margin: 0">是</div>
        <div v-else style="margin: 0">否</div>
      </template>
    </van-field>
    <van-field
      type="text"
      v-model="contractList.signDate"
      :class="oldContractList && contractList.signDate !== oldContractList.signDate ? 'app-sino-change-back' : ''"
      label="预计签订时间"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.signDate }}</div>
      </template>
    </van-field>
    <van-field
      v-model="contractList.remark"
      :class="oldContractList && contractList.remark !== oldContractList.remark ? 'app-sino-change-back' : ''"
      rows="2"
      name="remark"
      autosize
      label="备注"
      type="textarea"
      readonly
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.remark }}</div>
      </template>
    </van-field>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: ['contractList', 'oldContractList', 'isCustPro', 'isCustProShow', 'custProList', 'hasRequired'],
  created() {},
  data() {
    return {
      showPicker: false
    }
  },
  methods: {
    onConfirm(value) {
      this.contractList.custProDesc = value.text
      this.contractList.custPro = value.custPro
      this.showPicker = false
    }
  }
}
</script>
