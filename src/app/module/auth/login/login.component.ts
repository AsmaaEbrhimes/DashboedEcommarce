import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Store } from '@ngrx/store';
import { AuthActions } from '../Store/AllTypes/auth.types';
import { Observable } from 'rxjs';
import { AuthState } from '../Store/Reducer/auth.reducer';
import { RequierdEmail } from '../valdtion/EmailValidtion';
import { Router } from '@angular/router';
import { CoreServiesService } from '../../../Core/servies/core-servies.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(
    private FB: FormBuilder,
    private authServies: AuthService,
    private store: Store<{ authFeaturesKey: AuthState }>,
    private router: Router,
    private CoreServiesService:CoreServiesService
  ) {}
  LoginForm!: FormGroup;
  success$!: Observable<boolean>;
  LoadingButton: string = '';
  error$!: Observable<boolean>;

  ngOnInit(): void {
    this.CreateFormLogin();
    this.SuccessResponseLogin();
    this.ErrorResponseLogin();
    this.onLogOut()
  }

  getControl(controlName: string) {
    return this.LoginForm.get(controlName);
  }

  CreateFormLogin() {
    this.LoginForm = this.FB.group({
      email: ['', [RequierdEmail]],
      password: ['', Validators.required],
    });
  }

  LoginAccountUser(loaderText: string) {
    this.LoadingButton = loaderText;
    if (this.LoginForm.invalid) {
      this.LoginForm.markAllAsTouched();
      this.LoadingButton = '';
      return;
    }
    this.store.dispatch(
      AuthActions.isLoginUser({ user: this.LoginForm.value })
    );
  }

  SuccessResponseLogin() {
    this.success$ = this.store.select((state) => state.authFeaturesKey.success);
    this.success$.subscribe((success) => {
      if (success) {
        this.LoadingButton = '';
        this.authServies.processSuccessAuth();
        this.LoginForm.reset();
        setTimeout(() => {
          this.store.dispatch(AuthActions.clearSuccess());
          this.router.navigate(['/']);
        }, 2000);
      }
    });
  }

  ErrorResponseLogin() {
    this.error$ = this.store.select((state) => state.authFeaturesKey.error);
    this.error$.subscribe((error) => {
      if (error) {
        this.LoadingButton = '';
        this.LoginForm.reset();
        setTimeout(() => {
          this.store.dispatch(AuthActions.clearError());
        }, 2000);
      }
    });
  }

    onLogOut() {
    this.CoreServiesService.proccingLogOut();
  }
















  @ViewChild('tableContainer', { static: false }) tableContainer!: ElementRef;

  project = { name: 'تقرير_صندوق_التبرعات' }; // مثال لبيانات المشروع

  print(): void {
    // 1. جلب كود الـ HTML للجدول (سواء من الدالة الخاصة بكِ أو من الـ DOM)
    // هنا افترضت استخدام الدالة الخاصة بكِ
    const data = { /* بياناتكِ كما هي */ };
    const htmlContent = this.printAssociationDonorFundExport({ base: '', system: '' }, data);

    // 2. صياغة قالب صفحة الـ Word مع التنسيقات والاتجاه العربي
    const fullHtml = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head>
        <title>${this.project?.name || 'Export'}</title>
        <meta charset="utf-8">
        <style>
          body { direction: rtl; font-family: 'Arial', sans-serif; padding: 20px; }
          table { border-collapse: collapse; width: 100%; direction: rtl; }
          th, td { border: 1px solid #000000; padding: 8px; text-align: right; }
          th { background-color: #2b579a; color: white; }
        </style>
      </head>
      <body>
        ${htmlContent}
      </body>
      </html>
    `;

    // 3. هنا الخطوة الأهم لـ Word Online:
    // بدلاً من الـ Blob المحتجز في الذاكرة المحلية، يجب إرسال هذا الـ `fullHtml` إلى الـ API (الـ Backend) ليقوم بحفظه على السيرفر ويعود لكِ برابط حقيقي للملف.

    const serverFileUrl = 'https://your-domain.com/uploads/temp_report.doc'; // الرابط الراجع من السيرفر بعد الرفع

    // 4. فتح الملف مباشرة في Word Online (المتصفح) دون الحاجة لتثبيت البرنامج
    const microsoftViewerUrl = `https://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(serverFileUrl)}`;

    window.open(microsoftViewerUrl, '_blank');
  }

  // الدالة الخاصة بكِ لتوليد الـ HTML
  printAssociationDonorFundExport(config: any, data: any): string {
    // الكود الخاص بكِ الذي يرجع كود الجدول الـ HTML
    return `
      <table>
        <tr><th>اسم المتبرع</th><th>المبلغ</th></tr>
        <tr><td>مؤسسة الأمل</td><td>5000$</td></tr>
      </table>
    `;
  }

}
