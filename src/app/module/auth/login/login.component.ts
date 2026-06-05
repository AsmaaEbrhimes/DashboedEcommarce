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
import { Document, Packer, Paragraph, Table, TableRow, TableCell, WidthType, BorderStyle } from 'docx';

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
    private CoreServiesService:CoreServiesService,

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




@ViewChild('tableContainer') tableContainer!: ElementRef;
project = { name: 'تقرير_صندوق_التبرعات' };

donationsList = [
  { name: 'مؤسسة الأمل الخيرية', amount: '5000$' },
  { name: 'فاعل خير', amount: '2500$' },
  { name: 'شركة النور', amount: '1200$' }
];

print(): void {
  const doc: Document = new Document({
    sections: [{
      children: [
        new Paragraph({ text: "تقرير صندوق التبرعات المحدث", alignment: "right", bidirectional: true, spacing: { after: 400 } }),

        new Table({
          alignment: "right",
          width: { size: 100, type: WidthType.PERCENTAGE },
          rows: [
            // صف العناوين
            new TableRow({ children: [this.cell("المبلغ", "2b579a"), this.cell("اسم المتبرع", "2b579a")] }),
            // صفوف البيانات ديناميكيًا مع تحديد نوع item كـ any أو كائن مخصص، و i كـ number
            ...this.donationsList.map((item: { name: string; amount: string }, i: number) => new TableRow({
              children: [
                this.cell(item.amount, i % 2 === 0 ? "ffffff" : "f2f2f2"),
                this.cell(item.name, i % 2 === 0 ? "ffffff" : "f2f2f2")
              ]
            }))
          ],
        }),
      ],
    }],
  });

  // هنا حددنا نوع الـ blob والـ err صراحة لحل خطأ الـ Build
  Packer.toBlob(doc).then((blob: Blob) => {
    const fileURL = URL.createObjectURL(blob);
    window.location.href = fileURL;
    setTimeout(() => URL.revokeObjectURL(fileURL), 5000);
  }).catch((err: any) => console.error('خطأ:', err));
}

// دالة مساعدة مختصرة جدًا لإنشاء الخلايا بحدود ثابتة
private cell(text: string, bgColor: string): TableCell {
  return new TableCell({
    shading: { fill: bgColor },
    margins: { top: 150, bottom: 150, left: 150, right: 150 },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 6, color: "cccccc" },
      bottom: { style: BorderStyle.SINGLE, size: 6, color: "cccccc" },
      left: { style: BorderStyle.SINGLE, size: 6, color: "cccccc" },
      right: { style: BorderStyle.SINGLE, size: 6, color: "cccccc" },
    },
    children: [new Paragraph({ text, alignment: "right", bidirectional: true })],
  });
}

updateDataDemo(): void {
  this.donationsList = [
    { name: 'تم تعديل الاسم الأول', amount: '9999$' },
    { name: 'مؤسسة الأمل المحدثة', amount: '5000$' },
    { name: 'متبرع جديد مضاف', amount: '700$' }
  ];
}

}
