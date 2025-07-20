// ننتظر حتى يتم تحميل كل عناصر الصفحة
document.addEventListener('DOMContentLoaded', () => {

    // الحصول على العناصر من ملف HTML لنتحكم بها
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    // وظيفة لإضافة مهمة جديدة
    function addTask() {
        // نأخذ النص من مربع الإدخال ونزيل أي مسافات فارغة
        const taskText = taskInput.value.trim();

        // نتأكد أن المستخدم كتب شيئاً
        if (taskText === '') {
            alert('الرجاء إدخال نص المهمة!');
            return;
        }

        // 1. إنشاء عنصر قائمة جديد <li>
        const li = document.createElement('li');

        // 2. إنشاء نص المهمة
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        // 3. إنشاء زر الحذف
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'حذف';
        deleteBtn.className = 'delete-btn'; // لإعطائه التنسيق من ملف CSS

        // 4. إضافة النص والزر إلى عنصر القائمة
        li.appendChild(taskSpan);
        li.appendChild(deleteBtn);

        // 5. إضافة عنصر القائمة كاملاً إلى قائمة المهام في الصفحة
        taskList.appendChild(li);

        // 6. تفريغ مربع الإدخال ليكون جاهزاً للمهمة التالية
        taskInput.value = '';

        // إضافة حدث عند الضغط على المهمة لوضع خط عليها (مكتملة)
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        // إضافة حدث لزر الحذف
        deleteBtn.addEventListener('click', (event) => {
            event.stopPropagation(); // لمنع تفعيل حدث الضغط على المهمة نفسها
            taskList.removeChild(li);
        });
    }

    // ربط وظيفة "addTask" بزر "إضافة"
    addTaskBtn.addEventListener('click', addTask);

    // إضافة إمكانية إضافة مهمة عند الضغط على زر Enter في الكيبورد
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});
