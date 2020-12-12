<template>
<div class="bg-light container-flex mt-3 mr-3 ml-3 mb-0" style="min-height: 100vh;">
    <div class="row m-0 pt-1">
        <h4 class="col-11 font-weight-bold">{{Name}}</h4>
        <button class="col-1 btn btn-dark rounded-pill" data-toggle="button" @click="isDisabled = !isDisabled">Edit</button>
    </div>

    <div class="card border-0 mt-3">
        <div class="card-body p-1">
            <table class="table table-borderless m-0">
                <tbody>
                    <tr>
                        <th>계정</th>
                        <td>{{ID}}</td>
                        <th>비밀번호</th>
                        <td><input :disabled="isDisabled" type="password" class="form-control form-control-sm" id="pass" placeholder="password" v-model="Password"></td>
                        <td><input :disabled="isDisabled" type="password" class="form-control form-control-sm" id="cpass" placeholder="check password" v-model="cPassword"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>E-mail</th>
                        <td><input :disabled="isDisabled"  type="email" class="form-control form-control-sm" id="email" placeholder="id@domain.com" v-model="Email"></td>
                        <th>연락처</th>
                        <td><input :disabled="isDisabled" class="form-control form-control-sm" id="phone" placeholder="번호" v-model="Phone"></td>
                        <td><input :disabled="isDisabled" class="form-control form-control-sm" id="econtact1" placeholder="비상1" v-model="Phone1"></td>
                        <td><input :disabled="isDisabled" class="form-control form-control-sm" id="econtact2" placeholder="비상2" v-model="Phone2"></td>
                    </tr>
                    <tr>
                        <th>성별</th>
                        <td>
                            <select :disabled="isDisabled" class="form-control form-control-sm">
                                <option v-for="option in Sexs" v-bind:key="option.value">{{ option.sex }}</option>
                            </select>
                        </td>
                        <td></td>
                        <th>생년월일</th>
                        <td><input :disabled="isDisabled" type="date" class="form-control form-control-sm" id="birth" placeholder="birth" v-model="Birth"></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <div class="row mt-3">
        <div class="col-6">
            <div class="card border-0">
                <div class="card-body p-1">
                    <div class="card-title font-weight-bold pt-2 pl-2">건강 정보</div>
                    <table class="table table-borderless m-0">
                        <tbody>
                            <tr>
                                <th>혈액형</th>
                                <td></td>
                                <td class="form-row">
                                    <select :disabled="isDisabled" class="form-control form-control-sm">
                                        <option v-for="option in Bloods" v-bind:key="option.value">{{ option.blood }}</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th>키</th>
                                <td></td>
                                <td class="form-row">
                                    <input :disabled="isDisabled" class="col-11 form-control form-control-sm text-right" id="height" placeholder="height" v-model="Height">
                                    <label class="col-1">cm</label>
                                </td>
                                
                            </tr>
                            <tr>
                                <th>몸무게</th>
                                <td></td>
                                <td class="form-row">
                                    <input :disabled="isDisabled" class="col-11 form-control form-control-sm text-right" id="weight" placeholder="weight" v-model="Weight">
                                    <label class="col-1">kg</label>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="col-6">
            <div class="card border-0">
                <div class="card-body p-1">
                    <div class="card-title font-weight-bold pt-2 pl-2">질병, 질환</div>
                    <table class="table table-borderless m-0">
                        <tbody>
                            <tr>
                                <th>당뇨</th>
                                <td class="text-right">
                                    <div class="custom-control custom-radio custom-control-inline">
                                        <input :disabled="isDisabled" type="radio" id="di-true" name="diradio" class="custom-control-input" :checked="diabetes">
                                        <label class="custom-control-label" for="di-true">있음</label>
                                    </div>
                                    <div class="custom-control custom-radio custom-control-inline">
                                        <input :disabled="isDisabled" type="radio" id="di-false" name="diradio" class="custom-control-input" :checked="!diabetes">
                                        <label class="custom-control-label" for="di-false">없음</label>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>고혈압</th>
                                <td class="text-right">
                                    <div class="custom-control custom-radio custom-control-inline">
                                        <input :disabled="isDisabled" type="radio" id="hptrue" name="hpradio" class="custom-control-input" :checked="HP">
                                        <label class="custom-control-label" for="hptrue">있음</label>
                                    </div>
                                    <div class="custom-control custom-radio custom-control-inline">
                                        <input :disabled="isDisabled" type="radio" id="hpfalse" name="hpradio" class="custom-control-input" :checked="!HP">
                                        <label class="custom-control-label" for="hpfalse">없음</label>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>저혈압</th>
                                <td class="text-right">
                                    <div class="custom-control custom-radio custom-control-inline">
                                        <input :disabled="isDisabled" type="radio" id="lptrue" name="lpradio" class="custom-control-input" :checked="LP">
                                        <label class="custom-control-label" for="lptrue">있음</label>
                                    </div>
                                    <div class="custom-control custom-radio custom-control-inline">
                                        <input :disabled="isDisabled" type="radio" id="lpfalse" name="lpradio" class="custom-control-input" :checked="!LP">
                                        <label class="custom-control-label" for="lpfalse">없음</label>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>알레르기</th>
                                <td class="text-right">
                                    <input :disabled="isDisabled" class="form-control form-control-sm text-right" id="allergy" placeholder="allergy" v-model="allergy">
                                </td>
                            </tr>
                            <tr>
                                <th>기타 질환</th>
                                <td class="text-right">
                                    <textarea :disabled="isDisabled" class="form-control form-control-sm" id="disease" placeholder="disease" v-model="disease"></textarea>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style>
tr:hover {
    background-color: gainsboro;
}
</style>

<script>
export default {
    data() {
        return {
            isDisabled: true,
            Name: '홍길동',
            ID: 'honggd',
            Email:'honggd@google.com',
            Password: '12345678',
            cPassword: '12345678',
            Phone: '010-1111-2222',
            Phone1: '010-3333-4444',
            Phone2: '010-5555-6666',
            Birth: '1999-01-01',
            Height: '160',
            Weight: '50',
            HBP: '100',
            LBP: '70',
            BS: '95',
            lHR: '120',
            eHR: '140',
            diabetes: false,
            HP: false,
            LP: false,
            allergy: '알레르기 나열',
            disease: '기타 질환',
            Sexs: [
                {sex: '여'},
                {sex: '남'}
            ],
            Bloods: [
                {blood: 'RH+A'},
                {blood: 'RH-A'},
                {blood: 'RH+B'},
                {blood: 'RH-B'},
                {blood: 'RH+O'},
                {blood: 'RH-O'},
                {blood: 'RH+AB'},
                {blood: 'RH-AB'},
                {blood: 'RH+A'}
            ],
            eoptions: [
                { text: 'select', value: '0' },
                { text: 'gmail.com', value: '1' },
                { text: 'gachon.ac.kr', value: '2' },
                { text: 'naver.com', value: '3' },
                { text: 'daum.net', value: '4' },
                { text: 'hanmail.net', value: '5' }
            ]
        }
    }
}
</script>