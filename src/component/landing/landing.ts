import { NgFor } from '@angular/common';
import { Component, ViewChild, ElementRef,HostListener } from '@angular/core';


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NgFor],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {
  @ViewChild('gallery') gallery!: ElementRef<HTMLDivElement>;

  whatsappLink =
    'https://wa.me/972526833319?text=היי%20ברוך%2C%20אשמח%20לקבל%20הצעת%20מחיר%20לצילום%20אירוע';

  @HostListener('window:scroll', ['$event'])

  categories = ['חתונות', 'בר/ת מצווה', 'ברית/ה'];

  portfolioImages = [
    // ... תמונות לחתונה
    { src: 'assets/Wedding_r/wed_1.jpg', category: 'חתונות' },
    { src: 'assets/Wedding_r/wed_2.jpg', category: 'חתונות' },
    { src: 'assets/Wedding_r/wed_3.jpg', category: 'חתונות' },
    { src: 'assets/Wedding_r/wed_4.jpg', category: 'חתונות' },
    { src: 'assets/Wedding_r/wed_5.jpg', category: 'חתונות' },
    { src: 'assets/Wedding_r/wed_6.jpg', category: 'חתונות' },
    { src: 'assets/Wedding_r/wed_7.jpg', category: 'חתונות' },
    { src: 'assets/Wedding_r/wed_8.jpg', category: 'חתונות' },
    { src: 'assets/Wedding_r/wed_9.jpg', category: 'חתונות' },
    { src: 'assets/Wedding_r/wed_10.jpg', category: 'חתונות' },
    { src: 'assets/Wedding_r/wed_11.jpg', category: 'חתונות' },
    { src: 'assets/Wedding_r/wed_12.jpg', category: 'חתונות' },
    { src: 'assets/Wedding_r/wed_13.jpg', category: 'חתונות' },
    { src: 'assets/Wedding_r/wed_14.jpg', category: 'חתונות' },
    { src: 'assets/Wedding_r/wed_15.jpg', category: 'חתונות' },
    { src: 'assets/Wedding_r/wed_16.jpg', category: 'חתונות' },
    { src: 'assets/Wedding_r/wed_17.jpg', category: 'חתונות' },
    { src: 'assets/Wedding_r/wed_18.jpg', category: 'חתונות' },
    { src: 'assets/Wedding_r/wed_19.jpg', category: 'חתונות' },
    { src: 'assets/Wedding_r/wed_20.jpg', category: 'חתונות' },
    // ... תמונות לבר/ת מצווה
    { src: 'assets/Barmitzva_r/bar_1.jpg', category: 'בר/ת מצווה' },
    { src: 'assets/Barmitzva_r/bar_2.jpg', category: 'בר/ת מצווה' },
    { src: 'assets/Barmitzva_r/bar_3.jpg', category: 'בר/ת מצווה' },
    { src: 'assets/Barmitzva_r/bar_4.jpg', category: 'בר/ת מצווה' },
    { src: 'assets/Barmitzva_r/bar_5.jpg', category: 'בר/ת מצווה' },
    { src: 'assets/Barmitzva_r/bar_6.jpg', category: 'בר/ת מצווה' },
    { src: 'assets/Barmitzva_r/bar_7.jpg', category: 'בר/ת מצווה' },
    { src: 'assets/Barmitzva_r/bar_8.jpg', category: 'בר/ת מצווה' },
    { src: 'assets/Barmitzva_r/bar_9.jpg', category: 'בר/ת מצווה' },
    { src: 'assets/Barmitzva_r/bar_10.jpg', category: 'בר/ת מצווה' },
    { src: 'assets/Barmitzva_r/bar_11.jpg', category: 'בר/ת מצווה' },
    { src: 'assets/Barmitzva_r/bar_12.jpg', category: 'בר/ת מצווה' },
    { src: 'assets/Barmitzva_r/bar_13.jpg', category: 'בר/ת מצווה' },
    { src: 'assets/Barmitzva_r/bar_14.jpg', category: 'בר/ת מצווה' },
    { src: 'assets/Barmitzva_r/bar_15.jpg', category: 'בר/ת מצווה' },
    { src: 'assets/Barmitzva_r/bar_16.jpg', category: 'בר/ת מצווה' },
    { src: 'assets/Barmitzva_r/bar_17.jpg', category: 'בר/ת מצווה' },
    // ... תמונות לברית/ה
    { src: 'assets/Brit_r/brit_1.jpg', category: 'ברית/ה' },
    { src: 'assets/Brit_r/brit_2.jpg', category: 'ברית/ה' },
    { src: 'assets/Brit_r/brit_3.jpg', category: 'ברית/ה' },
    { src: 'assets/Brit_r/brit_4.jpg', category: 'ברית/ה' },
    { src: 'assets/Brit_r/brit_5.jpg', category: 'ברית/ה' },
    { src: 'assets/Brit_r/brit_6.jpg', category: 'ברית/ה' },
    { src: 'assets/Brit_r/brit_7.jpg', category: 'ברית/ה' },
    { src: 'assets/Brit_r/brit_8.jpg', category: 'ברית/ה' },
    { src: 'assets/Brit_r/brit_9.jpg', category: 'ברית/ה' },
    { src: 'assets/Brit_r/brit_10.jpg', category: 'ברית/ה' },
    { src: 'assets/Brit_r/brit_11.jpg', category: 'ברית/ה' },
    { src: 'assets/Brit_r/brit_12.jpg', category: 'ברית/ה' },
    { src: 'assets/Brit_r/brit_13.jpg', category: 'ברית/ה' },
  ];

reviews = [
  {
    photo: 'assets/Hamlatzot/hamlatza_1.JPG',
    text: 'תודה ברוך אתה המלך שלנו שבעזרת ה לכל אירוע את תהיה אצלנו. אתה תותח אמיתי באמת שיצא מושלם.',
    name: 'יקיר עזרא'
  },
  {
    photo: 'assets/Hamlatzot/hamlatza_2.JPG',
    text: 'ברוך מה נשמע? רצינו להודות לך על אתמול היה מהמם! לגבי הבלוקים תעדכן מתי אפשר לבחור תמונות.',
    name: 'בתאל אזולאי'
  },
  {
    photo: 'assets/Hamlatzot/hamlatza_3.JPG',
    text: 'אין עליך ברוך היקר תודההההה ❤️❤️',
    name: 'מיכל שם טוב.'
  },
  {
    photo: 'assets/Hamlatzot/hamlatza_4.JPG',
    text: 'וואו ברוך מושלם מושלם תודה רבה רבה יצא מהמם באמת כל הכבוד לך מהמם',
    name: 'ישראל תמיר'
  }
];


  selectedCategory = this.categories[0]; // ברירת מחדל - קטגוריה ראשונה

  setCategory(cat: string) {
    this.selectedCategory = cat;
    this.scrollToStart();
  }

  get filteredImages() {
    return this.portfolioImages
      .filter(img => img.category === this.selectedCategory)
      .slice(0, 12);
  }

  scrollGallery(direction: number) {
    const width = this.gallery.nativeElement.clientWidth / 3;
    this.gallery.nativeElement.scrollBy({ left: direction * width, behavior: 'smooth' });
  }

  scrollToStart() {
    this.gallery.nativeElement.scrollTo({ left: 0, behavior: 'smooth' });
  }

    onWindowScroll() {
    const scrolled = window.pageYOffset;
    const video = document.querySelector('.hero-bg-video') as HTMLElement;
    if (video) {
      video.style.transform = `translate(-50%, calc(-50% + ${scrolled * 0.3}px))`;
    }
  }
}
