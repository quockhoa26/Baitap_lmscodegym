/**
 * ==========================================================================
 * MAIN.JS - BÍ QUYẾT TƯ DUY ĐỘT PHÁ LANDING PAGE
 * Tương tác giao diện đơn giản, nhẹ nhàng bằng Vanilla JS & Bootstrap 5
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. THANH ĐIỀU HƯỚNG: ĐỔI MÀU KHI CUỘN TRANG
  const navbar = document.querySelector('.navbar-custom');
  const backToTopBtn = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Hiệu ứng thanh navbar
    if (navbar) {
      if (scrollPos > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Hiển thị nút Back To Top
    if (backToTopBtn) {
      if (scrollPos > 350) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }

    // Tự động kích hoạt (active) liên kết điều hướng theo section
    updateActiveNavLink();
  });

  // 2. NÚT BACK TO TOP: CUỘN LÊN ĐẦU TRANG
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 3. TỰ ĐỘNG ĐÓNG MENU TRÊN ĐIỆN THOẠI KHI BẤM LIÊN KẾT
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link, .nav-cta-btn');
  const navCollapse = document.getElementById('navbarNav');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navCollapse && navCollapse.classList.contains('show')) {
        // Sử dụng instance Bootstrap Collapse để đóng menu
        const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });

  // 4. THEO DÕI SECTION HIỆN TẠI ĐỂ HIGHLIGHT MENU
  const sections = document.querySelectorAll('section[id], header[id]');

  function updateActiveNavLink() {
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // 5. MODAL ĐẶT MUA SÁCH (ORDER MODAL)
  const orderModalElement = document.getElementById('orderModal');
  const orderPackageSelect = document.getElementById('orderPackage');
  const orderForm = document.getElementById('orderForm');

  // Gán gói sách khi người dùng bấm nút ở từng thẻ giá
  const buyButtons = document.querySelectorAll('.btn-select-package');
  buyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selectedPlan = btn.getAttribute('data-plan') || 'paperback';
      if (orderPackageSelect) {
        orderPackageSelect.value = selectedPlan;
      }
    });
  });

  // Xử lý gửi biểu mẫu đặt hàng
  if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const customerName = document.getElementById('customerName')?.value.trim();
      const customerPhone = document.getElementById('customerPhone')?.value.trim();
      
      if (!customerName || !customerPhone) {
        showToast('Vui lòng điền đầy đủ Họ tên và Số điện thoại nhận sách!', 'warning');
        return;
      }

      // Đóng modal
      const bsOrderModal = bootstrap.Modal.getInstance(orderModalElement);
      if (bsOrderModal) {
        bsOrderModal.hide();
      }

      // Reset form
      orderForm.reset();

      // Thông báo thành công
      showToast(`Cảm ơn bạn ${customerName}! Đơn đặt sách đã được ghi nhận. Bộ phận CSKH sẽ gọi xác nhận trong 15 phút.`, 'success');
    });
  }

  // 6. FORM NHẬN BẢN ĐỌC THỬ MIỄN PHÍ TẠI DOWNLOAD SECTION
  const downloadForm = document.getElementById('downloadForm');
  if (downloadForm) {
    downloadForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('sampleEmail');
      const emailVal = emailInput ? emailInput.value.trim() : '';

      if (!emailVal || !emailVal.includes('@')) {
        showToast('Vui lòng nhập địa chỉ email hợp lệ để nhận bản đọc thử!', 'warning');
        return;
      }

      // Kích hoạt tải file thật
      const downloadLink = document.createElement('a');
      downloadLink.href = 'sample-chapter.pdf';
      downloadLink.download = 'Chuong-1-Bi-Quyet-Tu-Duy-Dot-Pha.pdf';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

      downloadForm.reset();
      showToast('Đang tải bản đọc thử PDF về máy của bạn! Hãy kiểm tra thư mục Download.', 'success');
    });
  }

  // 7. FORM NEWSLETTER Ở FOOTER
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const newsletterEmail = document.getElementById('newsletterEmail');
      if (newsletterEmail && newsletterEmail.value.includes('@')) {
        newsletterForm.reset();
        showToast('Cảm ơn bạn đã đăng ký! Bạn sẽ nhận được các bài viết truyền cảm hứng mới nhất từ tác giả.', 'success');
      } else {
        showToast('Vui lòng nhập địa chỉ email hợp lệ!', 'warning');
      }
    });
  }
});

// 8. HÀM HIỂN THỊ TOAST THÔNG BÁO NHỎ
function showToast(message, type = 'success') {
  let toastEl = document.getElementById('customToast');
  if (!toastEl) {
    toastEl = document.createElement('div');
    toastEl.id = 'customToast';
    toastEl.className = 'custom-toast';
    document.body.appendChild(toastEl);
  }

  const iconHtml = type === 'success' 
    ? '<i class="fa-solid fa-circle-check text-success fa-xl"></i>' 
    : '<i class="fa-solid fa-circle-exclamation text-warning fa-xl"></i>';

  toastEl.innerHTML = `
    ${iconHtml}
    <div>
      <div style="font-weight: 700; font-size: 0.95rem; color: #1e293b;">
        ${type === 'success' ? 'Thành công' : 'Thông báo'}
      </div>
      <div style="font-size: 0.88rem; color: #64748b; margin-top: 2px;">
        ${message}
      </div>
    </div>
  `;

  toastEl.classList.add('show');

  setTimeout(() => {
    toastEl.classList.remove('show');
  }, 4500);
}
