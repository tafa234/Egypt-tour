

const header = document.querySelector('header');
let lastScrollY = window.scrollY; // حفظ مكان التمرير الأخير

// التحقق من حالة التمرير
window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    // تغيير الخلفية بناءً على مكان التمرير
    if (currentScrollY > 50) {
        header.classList.add('scrolled'); // إضافة خلفية عند التمرير
    } else {
        header.classList.remove('scrolled'); // إزالة الخلفية عند العودة لأعلى الصفحة
    }

    // التحكم في ظهور/اختفاء الـ header عند التمرير لأعلى أو لأسفل
    if (currentScrollY > lastScrollY) {
        // إذا كنا نمر للأسفل
        header.classList.add('hide'); // إخفاء الـ header
        header.classList.remove('show');
    } else {
        // إذا كنا نمر للأعلى
        header.classList.add('show'); // إظهار الـ header
        header.classList.remove('hide');
    }

    lastScrollY = currentScrollY; // تحديث آخر مكان للتمرير
});





const searchInput = document.querySelector('.search input');
const searchButton = document.querySelector('.search button');

searchButton.addEventListener('click', () => {
    const searchQuery = searchInput.value.trim();
    if (searchQuery) {
        alert(`بحث عن: ${searchQuery}`);
    } else {
        alert('من فضلك أدخل كلمة للبحث.');
    }
});

// زر Book Now
const bookNowButton = document.querySelector('.basic-info .btn');
bookNowButton.addEventListener('click', () => {
    alert('شكراً لك! تم حجز الرحلة بنجاح.');
});

// تفاعل مع تفاصيل الأيام
const dayButtons = document.querySelectorAll('.numbers');
const dayDetails = document.querySelectorAll('.day-details');

// Toggle التفاصيل عند النقر على الأرقام
dayButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // تحقق إذا كانت التفاصيل مرئية بالفعل ثم إخفائها/إظهارها
        const detail = dayDetails[index];
        
        // استخدام التحويل الجمالي باستخدام `classList.toggle` لإظهار التفاصيل
        detail.classList.toggle('show-details');
        
        // التأثير بعد الانتهاء من التحويل
        if (detail.classList.contains('show-details')) {
            detail.style.overflow = 'visible';
        } else {
            detail.style.overflow = 'hidden';
        }
    });
});

// إضافة تأثير عند عرض التفاصيل
document.querySelectorAll('.day-details').forEach(detail => {
    detail.style.transition = 'max-height 0.3s ease-in-out';
    detail.style.maxHeight = '0px';
});

// تحديث التأثير عند التبديل
dayDetails.forEach(detail => {
    detail.addEventListener('transitionend', () => {
        // يتم التحكم بالـ maxHeight
        if (detail.classList.contains('show-details')) {
            detail.style.maxHeight = '500px'; // تحديد الارتفاع عندما يتم عرض المحتوى
        } else {
            detail.style.maxHeight = '0px'; // إخفاء المحتوى
        }
    });
});

// زر عرض المزيد في المعرض
const viewMoreButton = document.querySelector('.gallery .btn');
const galleryImages = document.querySelectorAll('.gallery-img');

viewMoreButton.addEventListener('click', () => {
    // التفاعل عند النقر على "عرض المزيد"
    galleryImages.forEach(img => {
        // عندما نضغط على زر "عرض المزيد"، نغير الشفافية
        img.style.opacity = img.style.opacity === '0.5' ? '1' : '0.5';
    });

    alert('المزيد من الصور غير متوفرة حالياً!');
});
// تفاعل مع الأيقونات الاجتماعية في الـ Footer
const tiktok  = document.querySelectorAll('.footer .tiktok');  // جميع الأيقونات الاجتماعية

tiktok.forEach(icon => {
    icon.addEventListener('click', () => {
        alert(`تم النقر على أيقونة: ${icon.alt}`);  // عرض تنبيه عند النقر على أي أيقونة
    });
});

const twitter  = document.querySelectorAll('.footer .twitter');  // جميع الأيقونات الاجتماعية

twitter.forEach(icon => {
    icon.addEventListener('click', () => {
        alert(`تم النقر على أيقونة: ${icon.alt}`);  // عرض تنبيه عند النقر على أي أيقونة
    });
});
const instagram  = document.querySelectorAll('.footer .instagram');  // جميع الأيقونات الاجتماعية

instagram.forEach(icon => {
    icon.addEventListener('click', () => {
        alert(`تم النقر على أيقونة: ${icon.alt}`);  // عرض تنبيه عند النقر على أي أيقونة
    });
});
const facebook  = document.querySelectorAll('.footer .facebook');  // جميع الأيقونات الاجتماعية

facebook.forEach(icon => {
    icon.addEventListener('click', () => {
        alert(`تم النقر على أيقونة: ${icon.alt}`);  // عرض تنبيه عند النقر على أي أيقونة
    });
});


// اختيار عنصر .landing-page
const landingPage = document.querySelector('.landing-page');

window.addEventListener('scroll', () => {
    // الحصول على مقدار التمرير من الأعلى
    const scrollY = window.scrollY;

    if (scrollY > 0) {
        // تطبيق التحريك لأسفل عند التمرير
        landingPage.style.backgroundPositionY = `${scrollY * 0.5}px`;
    } else {
        // إعادة الصورة إلى وضعها الطبيعي عند العودة للأعلى
        landingPage.style.backgroundPositionY = 'center';
    }
});


// الحصول على العنصر footer
const footer = document.querySelector('.footer');

// إضافة تأثير الخلفية عند التمرير
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY; // سرعة التمرير في الـ Y

    // تحريك الخلفية لتتبع التمرير
    footer.style.backgroundPosition = `center ${scrollY / 3}px`; // تغيير السرعة بناءً على مقدار التمرير
});





