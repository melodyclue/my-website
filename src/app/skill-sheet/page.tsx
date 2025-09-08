'use client';

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function SkillSheetPage() {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setLoading(false);
  }

  function onDocumentLoadError(error: Error) {
    console.error('Error loading PDF:', error);
    setLoading(false);
  }

  const goToPrevPage = () => {
    setPageNumber(prev => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber(prev => Math.min(prev + 1, numPages || 1));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">スキルシート</h1>
          <div className="flex justify-center gap-4 mb-4">
            <a
              href="/api/skill-sheet-pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              PDFをダウンロード
            </a>
            <a
              href="/api/skill-sheet-pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              新しいタブで表示
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          {loading && (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">PDFを読み込み中...</p>
            </div>
          )}

          <div className="flex flex-col items-center">
            <Document
              file="/api/skill-sheet-pdf"
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              className="border border-gray-300 rounded-lg shadow-sm"
            >
              <Page 
                pageNumber={pageNumber} 
                width={Math.min(800, window.innerWidth - 100)}
                renderTextLayer={true}
                renderAnnotationLayer={true}
              />
            </Document>

            {numPages && (
              <div className="flex items-center gap-4 mt-6">
                <button
                  onClick={goToPrevPage}
                  disabled={pageNumber <= 1}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  前のページ
                </button>
                
                <span className="text-gray-600">
                  {pageNumber} / {numPages}
                </span>
                
                <button
                  onClick={goToNextPage}
                  disabled={pageNumber >= numPages}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  次のページ
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}