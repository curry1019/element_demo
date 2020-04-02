<template>
    <div class="setBoxSize">
        <el-upload
            :action="actionPath"
            :data="postData"
            list-type="picture-card"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :on-success="handleAvatarSuccessnow"  
            :before-upload="beforeAvatarUpload2"
            :before-remove="beforeRemove"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
            <div slot="tip" class="el-upload__tip">只能上传JPG、PNG、JPEG、GIF文件，且不超过5MB!</div>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                actionPath:"https://upload.qiniup.com",
                postData:{"token":"z2p9DnMJwAc23uvM9OTuyxdtNTbqcorVDnXXwo_b:eArPnaWGfJVO_fzZcwzlGvN2yas=:eyJzY29wZSI6InlxLXNtYXJ0LXpvbmUiLCJkZWFkbGluZSI6MTYwODUxNjM2Nn0="},
                imgList:[],
                dialogImageUrl: '',
                dialogVisible: false
            }
        },
        methods: {
            //上传之前限制
            beforeAvatarUpload2(file){
                console.log('上传之前限制',file)
                let isHave = true;
                let fileType = ['image/jpeg','image/jpg','image/png','image/gif']
                const isJPG = fileType.includes(file.type);
                const isLt5M = file.size / 1024 / 1024 < 5;
                if(this.imgList.length > 0){
                    this.imgList.forEach((item,index) => {
                        if(item.fileName == file.name){
                            isHave = false
                        }
                    })
                }

                if (!isJPG) {
                    this.$message.error('上传图片只能是 JPG、PNG、JPEG、GIF格式!');
                }
                if (!isLt5M) {
                    this.$message.error('上传图片大小不能超过 5MB!');
                }
                if(!isHave) {
                    this.$message.error('您已上传过此图片!');
                }
                return isJPG && isLt5M && isHave;
            },
            //删除之前限制
            beforeRemove(file, fileList){
                return this.$confirm(`确定移除 ${ file.name }？`);
            },
            //删除图片
            handleRemove(file, fileList) {
                this.imgList.forEach((item,index)=>{
                    if(file.name == item.fileName){
                        this.imgList.splice(index,1)
                    }
                })
                console.log('删除成功后',this.imgList)
                return this.$message.success(`您已经成功移除 ${file.name}。`);
            },
            //文件超出个数限制
            handleExceed(files, fileList){
                this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
            },
            //查看大图
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            //上传成功
            handleAvatarSuccessnow(res, file, fileList){
                this.imgList.push({
					fileName: file.name,
					url: "http://kodo.smart-zone.51yuqian.net/" + file.response.key
                })
                console.log('成功了',this.imgList)
            }
        },
        mounted () {
            
        },
        created () {
            
        }
    }
</script>

<style lang="scss" scoped>
    .setBoxSize{
        width:80%;
        height:800px;
        margin:50px auto;
        border: 1px solid #ccc;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
</style>