
import { Button } from '@/components/ui/button'
import { Clock, Mail, Phone, ShieldCheck, Star, Zap } from 'lucide-react'
import React from 'react'

export default function StillHaveAnyQuestions() {
    return (
        <div>

            <div className="w-full mx-auto -mt-20">
                <div className="relative bg-gradient-to-br from-primary/10 via-blue-100/20 to-emerald-100/20 dark:from-gray-800/50 dark:via-gray-900/50 dark:to-blue-900/30 p-8 border border-gray-200/50 dark:border-gray-800">
                    <div className="relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/80 dark:bg-gray-800/80 rounded-full border border-gray-200 dark:border-gray-700 mb-4">
                            <Star className="h-3 w-3 text-primary" />
                            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Premium Support</span>
                        </div>

                        <h3 className="text-3xl font-bold mb-3 bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent dark:from-white dark:to-gray-300">
                            Still Have Questions?
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-xl mx-auto text-sm">
                            Our expert team is ready to provide personalized answers and immediate assistance for your specific needs.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Button
                                className="h-12 px-10 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg hover:shadow-xl transition-all duration-300 text-sm"
                            >
                                <Mail className="mr-2 h-4 w-4" />
                                Email Our Experts
                            </Button>

                            <Button
                                variant="outline"
                                className="h-12 px-10 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 text-sm"
                            >
                                <Phone className="mr-2 h-4 w-4" />
                                Call Now
                            </Button>
                        </div>

                        <div className="flex items-center justify-center gap-4 mt-6 text-xs text-gray-500 dark:text-gray-400">
                            <div className="flex items-center gap-1">
                                <Zap className="h-3 w-3 text-emerald-500" />
                                <span>24/7 Available</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <ShieldCheck className="h-3 w-3 text-blue-500" />
                                <span>Certified Experts</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Clock className="h-3 w-3 text-amber-500" />
                                <span>Quick Response</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
