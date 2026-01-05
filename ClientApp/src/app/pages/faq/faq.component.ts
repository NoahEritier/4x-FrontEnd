import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FaqService, FrequentlyQuestion } from '../../services/faq.service';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  faqs: FrequentlyQuestion[] = [];
  filteredFaqs: FrequentlyQuestion[] = [];
  categories: string[] = [];
  selectedCategory: string = 'Todas';
  searchTerm: string = '';
  isLoading: boolean = true;
  error: string | null = null;

  constructor(private faqService: FaqService) {}

  ngOnInit(): void {
    this.loadFaqs();
  }

  loadFaqs(): void {
    this.isLoading = true;
    this.error = null;
    
    this.faqService.getFaqs().subscribe({
      next: (faqs) => {
        this.faqs = faqs;
        this.categories = this.extractCategories(faqs);
        this.filteredFaqs = [...this.faqs];
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error loading FAQs:', err);
        this.error = 'No se pudieron cargar las preguntas frecuentes. Por favor, intente nuevamente más tarde.';
        this.isLoading = false;
      }
    });
  }

  private extractCategories(faqs: FrequentlyQuestion[]): string[] {
    const categories = new Set<string>();
    faqs.forEach(faq => {
      if (faq.category) {
        categories.add(faq.category);
      }
    });
    return Array.from(categories).sort();
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
    this.applyFilters();
  }

  searchFaqs(): void {
    this.applyFilters();
  }

  private applyFilters(): void {
    this.filteredFaqs = this.faqs.filter(faq => {
      const matchesCategory = this.selectedCategory === 'Todas' || faq.category === this.selectedCategory;
      const matchesSearch = !this.searchTerm || 
        faq.question.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        (faq.answer && faq.answer.toLowerCase().includes(this.searchTerm.toLowerCase())) ||
        (faq.keywords && faq.keywords.toLowerCase().includes(this.searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }

  toggleAnswer(faq: FrequentlyQuestion): void {
    faq.isOpen = !faq.isOpen;
  }
}
