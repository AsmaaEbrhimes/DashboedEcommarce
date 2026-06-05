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
import { Document, Packer, Paragraph, Table, TableRow, TableCell, TextDirection, WidthType, HeightRule, BorderStyle } from 'docx';
import { saveAs } from 'file-saver';
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

  project = { name: 'تقرير_صندوق_التبرعات' };

  // المصفوفة التي تحتوي على البيانات (تتحدث تلقائياً عند التعديل في الواجهة)
  donationsList = [
    { name: 'مؤسسة الأمل الخيرية', amount: '5000$' },
    { name: 'فاعل خير', amount: '2500$' },
    { name: 'شركة النور', amount: '1200$' }
  ];

  print(): void {
    // 1. إنشاء المستند الرئيسي
    const doc = new Document({
      sections: [{
        properties: {
          page: { margin: { top: 1440, bottom: 1440, left: 1440, right: 1440 } }
        },
        children: [
          // العنوان
          new Paragraph({
            text: "تقرير صندوق التبرعات المحدث",
            alignment: "right",
            bidirectional: true,
            spacing: { before: 200, after: 400 },
          }),

          new Paragraph({ text: "" }),

          // 2. بناء الجدول بالاعتماد على مصفوفة البيانات المحدثة
          new Table({
            alignment: "right",
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
              // صف العناوين الثابت (Header)
              new TableRow({
                children: [
                  this.createTableCell("المبلغ", "2b579a", true),
                  this.createTableCell("اسم المتبرع", "2b579a", true),
                ],
              }),

              // دمج صفوف البيانات ديناميكياً باستخدام دالة التعديل (Map Loop)
              ...this.generateDataRows()
            ],
          }),
        ],
      }],
    });

    // 3. فتح الملف المحدث مباشرة
    Packer.toBlob(doc).then((blob) => {
      const fileURL = URL.createObjectURL(blob);
      window.location.href = fileURL;
      setTimeout(() => URL.revokeObjectURL(fileURL), 5000);
    }).catch((error) => {
      console.error('حدث خطأ أثناء إنشاء ملف الـ Word:', error);
    });
  }

  /**
   * دالة التعديل وتوليد الصفوف ديناميكياً:
   * تقرأ أي تعديل طرأ على المصفوفة وتصيغ الصفوف بناءً عليه
   */
  private generateDataRows(): TableRow[] {
    return this.donationsList.map((item, index) => {
      // تمييز ألوان الصفوف بالتناوب (صف أبيض وصف رمادي)
      const rowColor = index % 2 === 0 ? "ffffff" : "f2f2f2";

      return new TableRow({
        children: [
          this.createTableCell(item.amount, rowColor, false),
          this.createTableCell(item.name, rowColor, false),
        ],
      });
    });
  }

  // الدالة المساعدة لتنسيق الخلايا
  private createTableCell(text: string, bgColor: string, isHeader: boolean): TableCell {
    return new TableCell({
      shading: { fill: bgColor },
      margins: { top: 150, bottom: 150, left: 150, right: 150 },
      borders: {
        top: { style: BorderStyle.SINGLE, size: 6, color: "cccccc" },
        bottom: { style: BorderStyle.SINGLE, size: 6, color: "cccccc" },
        left: { style: BorderStyle.SINGLE, size: 6, color: "cccccc" },
        right: { style: BorderStyle.SINGLE, size: 6, color: "cccccc" },
      },
      children: [
        new Paragraph({
          text: text,
          alignment: "right",
          bidirectional: true,
        }),
      ],
    });
  }

  
  updateDataDemo() {
    this.donationsList = [
      { name: 'تم تعديل الاسم الأول', amount: '9999$' },
      { name: 'مؤسسة الأمل المحدثة', amount: '5000$' },
      { name: 'متبرع جديد مضاف', amount: '700$' }
    ];
    alert('تم تعديل البيانات بنجاح! اضغطي على زر الطباعة لرؤية التعديل داخل ملف الـ Word.');
  }
}
