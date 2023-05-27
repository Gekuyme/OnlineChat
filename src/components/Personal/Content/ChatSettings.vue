<script setup>
</script>
<template>
    <div class="w-full bg-white flex justify-center">
        <div class="bg-white shadow-xl w-2/3 pl-20 pr-20 py-10 max-sm:pl-10 max-sm:pr-10 max-sm:py-5">
            <p class="text-3xl max-sm:text-2xl ">Настройка Аккаунта</p>
            <form action="#" method="post" class="flex flex-col mt-20 gap-10 max-sm:mt-10">
                <div class="flex w-full justify-around max-xl:justify-between max-lg:flex-col max-lg:gap-5">
                    <div class="flex flex-col gap-3 max-lg:w-full">
                        <p>Имя</p>
                        <input type="text" name="Name"
                            class=" w-64 h-10 p-5 outline-none border border-1 focus:border-gray-400 max-xl:w-56 max-lg:w-full">
                    </div>
                    <div class="flex flex-col gap-3 max-lg:w-full">
                        <p>Почта</p>
                        <input type="text" name="Name"
                            class=" w-64 h-10 p-5 outline-none border border-1 focus:border-gray-400 max-xl:w-56 max-lg:w-full">
                    </div>
                </div>
                <div class="flex w-full justify-around max-xl:justify-between max-lg:flex-col max-lg:gap-5">
                    <div class="flex flex-col gap-3 max-lg:w-full">
                        <p>Пароль</p>
                        <input type="text" name="Password}"
                            class=" w-64 h-10 p-5 outline-none border border-1 focus:border-gray-400 max-xl:w-56 max-lg:w-full">
                    </div>
                    <div class="flex flex-col gap-3 max-lg:w-full">
                        <p>Подтвердите пароль</p>
                        <input type="text" name="Name"
                            class=" w-64 h-10 p-5 outline-none border border-1 focus:border-gray-400 max-xl:w-56 max-lg:w-full">
                    </div>
                </div>
                <div class="flex w-full justify-around max-xl:justify-between max-lg:flex-col max-lg:gap-5">
                    <div class="flex flex-col gap-3 max-lg:w-full">
                        <button class="bg-gray-400 w-32 h-10 rounded-md">
                            Отправить
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<style scoped></style>
