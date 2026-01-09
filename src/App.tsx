import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import {
    TrendingUp,
    BarChart3,
    Target,
    Users,
    ArrowRight,
    CheckCircle,
    LineChart,
    Zap,
    Globe,
    Mail,
    Phone,
    MapPin,
    ChevronUp,
    Menu,
    X,
} from 'lucide-react';
import './index.css';

// ========== ヘッダー ==========
function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: 'サービス', href: '#services' },
        { label: '実績', href: '#stats' },
        { label: '導入事例', href: '#cases' },
        { label: 'お問い合わせ', href: '#contact' },
    ];

    return (
        <header
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                padding: '16px 0',
                background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                borderBottom: isScrolled ? '1px solid var(--border-light)' : 'none',
                transition: 'all 0.3s ease',
            }}
        >
            <div
                className="container"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                {/* ロゴ */}
                <a
                    href="#"
                    style={{
                        fontSize: '1.5rem',
                        fontWeight: 800,
                        textDecoration: 'none',
                        background: 'var(--gradient-1)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}
                >
                    GROWTHIFY
                </a>

                {/* デスクトップナビ */}
                <nav
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '32px',
                    }}
                    className="desktop-nav"
                >
                    {navLinks.map((link, idx) => (
                        <a
                            key={idx}
                            href={link.href}
                            style={{
                                color: 'var(--text-secondary)',
                                textDecoration: 'none',
                                fontSize: '0.95rem',
                                fontWeight: 500,
                                transition: 'color 0.2s',
                            }}
                            onMouseOver={(e) =>
                                ((e.target as HTMLAnchorElement).style.color = 'var(--primary)')
                            }
                            onMouseOut={(e) =>
                                ((e.target as HTMLAnchorElement).style.color = 'var(--text-secondary)')
                            }
                        >
                            {link.label}
                        </a>
                    ))}
                    <button
                        className="btn-primary"
                        style={{ padding: '10px 24px', fontSize: '0.9rem' }}
                    >
                        無料相談
                    </button>
                </nav>

                {/* モバイルメニューボタン */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    style={{
                        display: 'none',
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--text-primary)',
                        cursor: 'pointer',
                        padding: '8px',
                    }}
                    className="mobile-menu-btn"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* モバイルメニュー */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        right: 0,
                        background: 'white',
                        padding: '20px',
                        borderBottom: '1px solid var(--border-light)',
                        boxShadow: 'var(--shadow-lg)',
                    }}
                    className="mobile-menu"
                >
                    {navLinks.map((link, idx) => (
                        <a
                            key={idx}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            style={{
                                display: 'block',
                                padding: '12px 0',
                                color: 'var(--text-primary)',
                                textDecoration: 'none',
                                fontSize: '1rem',
                                fontWeight: 500,
                                borderBottom: '1px solid var(--border-light)',
                            }}
                        >
                            {link.label}
                        </a>
                    ))}
                    <button
                        className="btn-primary"
                        style={{ width: '100%', marginTop: '16px', justifyContent: 'center' }}
                    >
                        無料相談
                    </button>
                </motion.div>
            )}
        </header>
    );
}


// ========== ヒーローセクション ==========
function HeroSection() {
    return (
        <section
            style={{
                position: 'relative',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
            }}
        >
            {/* 背景画像 */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'url(/images/hero-bg.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center right',
                    opacity: 0.15,
                }}
            />

            {/* 背景装飾 */}
            <div
                className="blob blob-primary"
                style={{
                    width: '600px',
                    height: '600px',
                    top: '-200px',
                    right: '-200px',
                }}
            />
            <div
                className="blob blob-accent"
                style={{
                    width: '400px',
                    height: '400px',
                    bottom: '-100px',
                    left: '-100px',
                }}
            />

            {/* グリッド背景 */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px)
          `,
                    backgroundSize: '60px 60px',
                }}
            />

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '60px',
                        flexWrap: 'wrap',
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ maxWidth: '550px', flex: '1 1 400px' }}
                    >
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            style={{
                                display: 'inline-block',
                                padding: '8px 20px',
                                background: 'rgba(99, 102, 241, 0.15)',
                                borderRadius: '50px',
                                color: 'var(--primary)',
                                fontSize: '0.9rem',
                                fontWeight: 500,
                                marginBottom: '24px',
                            }}
                        >
                            デジタルマーケティングのプロフェッショナル
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            style={{
                                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                                fontWeight: 800,
                                lineHeight: 1.2,
                                marginBottom: '24px',
                            }}
                        >
                            データで、
                            <br />
                            <span
                                style={{
                                    background: 'var(--gradient-1)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}
                            >
                                成長を加速させる
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            style={{
                                fontSize: '1.2rem',
                                color: 'var(--text-secondary)',
                                marginBottom: '40px',
                                maxWidth: '600px',
                            }}
                        >
                            売上向上・集客強化・ブランディング支援をワンストップで。
                            <br />
                            500社以上の成長を支えてきたGROWTHIFYが、
                            貴社のビジネスを次のステージへ導きます。
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
                        >
                            <button className="btn-primary">
                                無料相談を予約する
                                <ArrowRight size={18} />
                            </button>
                            <button className="btn-secondary">サービス詳細を見る</button>
                        </motion.div>
                    </motion.div>

                    {/* ヒーロー画像 */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        style={{
                            flex: '1 1 400px',
                            maxWidth: '500px',
                        }}
                    >
                        <img
                            src="/images/hero-bg.png"
                            alt="データ分析ダッシュボード"
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '20px',
                                boxShadow: 'var(--shadow-lg)',
                            }}
                        />
                    </motion.div>
                </div>
            </div>

            {/* スクロールインジケーター */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                style={{
                    position: 'absolute',
                    bottom: '40px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '8px',
                }}
            >
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    SCROLL
                </span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    style={{
                        width: '24px',
                        height: '40px',
                        border: '2px solid var(--text-muted)',
                        borderRadius: '12px',
                        display: 'flex',
                        justifyContent: 'center',
                        paddingTop: '8px',
                    }}
                >
                    <motion.div
                        style={{
                            width: '4px',
                            height: '8px',
                            background: 'var(--primary)',
                            borderRadius: '2px',
                        }}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}

// ========== サービスセクション ==========
const services = [
    {
        icon: TrendingUp,
        title: 'デジタル広告運用',
        description:
            'Google広告・Meta広告を中心に、データドリブンな運用でROIを最大化。AIを活用した入札最適化で成果を追求します。',
        features: ['Google広告', 'Meta広告', 'LINE広告', 'リマーケティング'],
        image: '/images/digital-advertising.png',
    },
    {
        icon: Globe,
        title: 'SEO / コンテンツマーケティング',
        description:
            '検索エンジンからのオーガニック流入を強化。競合分析からコンテンツ制作まで一貫してサポートします。',
        features: ['テクニカルSEO', 'コンテンツ戦略', '被リンク構築', 'サイト改善'],
        image: '/images/seo-content.png',
    },
    {
        icon: BarChart3,
        title: 'データ分析・戦略立案',
        description:
            'カスタムダッシュボード構築からKPI設計まで。データに基づいた意思決定を支援します。',
        features: ['GA4分析', 'ダッシュボード', 'KPI設計', 'レポーティング'],
        image: '/images/data-analytics.png',
    },
];

function ServicesSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section className="section" style={{ background: 'var(--bg-light)' }}>
            <div className="container">
                <h2 className="section-title">サービス</h2>
                <p className="section-subtitle">
                    マーケティングの課題を包括的に解決する3つのソリューション
                </p>

                <div ref={ref} className="grid-3">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="card"
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            {/* サービス画像 */}
                            <div
                                style={{
                                    marginBottom: '20px',
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                }}
                            >
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    style={{
                                        width: '100%',
                                        height: '180px',
                                        objectFit: 'cover',
                                    }}
                                />
                            </div>

                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    marginBottom: '16px',
                                }}
                            >
                                <div
                                    style={{
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: '12px',
                                        background: 'var(--gradient-1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0,
                                    }}
                                >
                                    <service.icon size={24} color="white" />
                                </div>
                                <h3
                                    style={{
                                        fontSize: '1.2rem',
                                        fontWeight: 700,
                                    }}
                                >
                                    {service.title}
                                </h3>
                            </div>

                            <p
                                style={{
                                    color: 'var(--text-secondary)',
                                    marginBottom: '20px',
                                    flex: 1,
                                    fontSize: '0.95rem',
                                }}
                            >
                                {service.description}
                            </p>

                            <div
                                style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '8px',
                                }}
                            >
                                {service.features.map((feature, fIdx) => (
                                    <span
                                        key={fIdx}
                                        style={{
                                            padding: '6px 12px',
                                            background: 'rgba(99, 102, 241, 0.1)',
                                            borderRadius: '20px',
                                            fontSize: '0.8rem',
                                            color: 'var(--primary)',
                                        }}
                                    >
                                        {feature}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ========== 実績・数字セクション ==========
const stats = [
    { value: 500, suffix: '社+', label: '導入企業数' },
    { value: 280, suffix: '%', label: '平均ROAS改善率' },
    { value: 96, suffix: '%', label: 'クライアント継続率' },
    { value: 50, suffix: '億円+', label: '運用広告費総額' },
];

function AnimatedCounter({
    value,
    suffix,
    inView,
}: {
    value: number;
    suffix: string;
    inView: boolean;
}) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) return;

        let start = 0;
        const duration = 2000;
        const increment = value / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [inView, value]);

    return (
        <span>
            {count}
            {suffix}
        </span>
    );
}

function StatsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section className="section" style={{ position: 'relative' }}>
            {/* 背景装飾 */}
            <div
                className="blob blob-accent"
                style={{
                    width: '500px',
                    height: '500px',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    opacity: 0.15,
                }}
            />

            <div className="container" style={{ position: 'relative' }}>
                <h2 className="section-title">実績</h2>
                <p className="section-subtitle">
                    数字が証明する、GROWTHIFYの成果
                </p>

                <div ref={ref} className="grid-4">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            style={{
                                textAlign: 'center',
                                padding: '30px 20px',
                            }}
                        >
                            <div
                                style={{
                                    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                                    fontWeight: 800,
                                    background: 'var(--gradient-1)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    marginBottom: '8px',
                                }}
                            >
                                <AnimatedCounter
                                    value={stat.value}
                                    suffix={stat.suffix}
                                    inView={isInView}
                                />
                            </div>
                            <div
                                style={{
                                    color: 'var(--text-secondary)',
                                    fontSize: '1rem',
                                }}
                            >
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ========== 導入事例セクション ==========
const caseStudies = [
    {
        industry: 'EC / D2C',
        company: '化粧品ブランド A社',
        result: 'ROAS 320%改善',
        description:
            'Meta広告のクリエイティブ最適化とGA4連携によるコンバージョン計測強化で、広告効率を大幅改善。',
        icon: Target,
    },
    {
        industry: 'BtoB SaaS',
        company: 'クラウドサービス B社',
        result: 'リード獲得数 2.5倍',
        description:
            'SEO戦略の刷新とコンテンツマーケティング強化により、オーガニック経由のリードが飛躍的に増加。',
        icon: LineChart,
    },
    {
        industry: '人材・採用',
        company: '人材紹介 C社',
        result: '応募単価 40%削減',
        description:
            'Google広告の入札戦略見直しとランディングページ改善で、効率的な採用マーケティングを実現。',
        icon: Users,
    },
];

function CaseStudiesSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section className="section" style={{ background: 'var(--bg-light)' }}>
            <div className="container">
                <h2 className="section-title">導入事例</h2>
                <p className="section-subtitle">
                    業種を超えて、成果を実現してきた支援実績
                </p>

                <div ref={ref} className="grid-3">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={index}
                            className="card"
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    marginBottom: '16px',
                                }}
                            >
                                <div
                                    style={{
                                        width: '44px',
                                        height: '44px',
                                        borderRadius: '12px',
                                        background: 'rgba(6, 182, 212, 0.15)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <study.icon size={22} color="var(--accent)" />
                                </div>
                                <div>
                                    <span
                                        style={{
                                            fontSize: '0.75rem',
                                            color: 'var(--accent)',
                                            fontWeight: 600,
                                        }}
                                    >
                                        {study.industry}
                                    </span>
                                    <div
                                        style={{
                                            fontSize: '0.9rem',
                                            color: 'var(--text-secondary)',
                                        }}
                                    >
                                        {study.company}
                                    </div>
                                </div>
                            </div>

                            <div
                                style={{
                                    fontSize: '1.5rem',
                                    fontWeight: 700,
                                    marginBottom: '12px',
                                    background: 'var(--gradient-1)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}
                            >
                                {study.result}
                            </div>

                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                                {study.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ========== CTAセクション ==========
function CTASection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section className="section" style={{ position: 'relative' }}>
            {/* 背景装飾 */}
            <div
                className="blob blob-primary"
                style={{
                    width: '400px',
                    height: '400px',
                    top: '0',
                    right: '10%',
                }}
            />
            <div
                className="blob blob-accent"
                style={{
                    width: '300px',
                    height: '300px',
                    bottom: '0',
                    left: '10%',
                }}
            />

            <div className="container" style={{ position: 'relative' }}>
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="glass"
                    style={{
                        borderRadius: '30px',
                        padding: '80px 40px',
                        textAlign: 'center',
                    }}
                >
                    <h2
                        style={{
                            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                            fontWeight: 700,
                            marginBottom: '20px',
                        }}
                    >
                        まずは、
                        <span
                            style={{
                                background: 'var(--gradient-1)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                        >
                            無料相談
                        </span>
                        から
                    </h2>

                    <p
                        style={{
                            color: 'var(--text-secondary)',
                            fontSize: '1.1rem',
                            marginBottom: '40px',
                            maxWidth: '600px',
                            margin: '0 auto 40px',
                        }}
                    >
                        貴社の課題をヒアリングし、最適なマーケティング戦略をご提案します。
                        <br />
                        まずはお気軽にご相談ください。
                    </p>

                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '20px',
                            flexWrap: 'wrap',
                        }}
                    >
                        <button className="btn-primary" style={{ padding: '18px 40px' }}>
                            <Zap size={20} />
                            無料相談を予約する
                        </button>
                        <button className="btn-secondary" style={{ padding: '18px 40px' }}>
                            <Mail size={20} />
                            資料請求
                        </button>
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '30px',
                            marginTop: '40px',
                            flexWrap: 'wrap',
                        }}
                    >
                        {[
                            '相談無料',
                            '最短翌日対応',
                            'オンライン完結OK',
                        ].map((text, idx) => (
                            <div
                                key={idx}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    color: 'var(--text-secondary)',
                                    fontSize: '0.9rem',
                                }}
                            >
                                <CheckCircle size={16} color="var(--accent)" />
                                {text}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// ========== フッター ==========
function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer
            style={{
                background: 'var(--bg-light)',
                borderTop: '1px solid var(--border-light)',
                padding: '60px 0 30px',
            }}
        >
            <div className="container">
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '40px',
                        marginBottom: '50px',
                    }}
                >
                    {/* ロゴ・会社情報 */}
                    <div>
                        <div
                            style={{
                                fontSize: '1.8rem',
                                fontWeight: 800,
                                marginBottom: '16px',
                                background: 'var(--gradient-1)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                        >
                            GROWTHIFY
                        </div>
                        <p
                            style={{
                                color: 'var(--text-muted)',
                                fontSize: '0.9rem',
                                lineHeight: 1.8,
                            }}
                        >
                            データドリブンなマーケティングで、
                            <br />
                            ビジネスの成長を加速させます。
                        </p>
                    </div>

                    {/* サービス */}
                    <div>
                        <h4
                            style={{
                                fontSize: '0.9rem',
                                fontWeight: 600,
                                marginBottom: '20px',
                                color: 'var(--text-primary)',
                            }}
                        >
                            サービス
                        </h4>
                        <ul
                            style={{
                                listStyle: 'none',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '12px',
                            }}
                        >
                            {['デジタル広告運用', 'SEO対策', 'コンテンツマーケティング', 'データ分析'].map(
                                (item, idx) => (
                                    <li key={idx}>
                                        <a
                                            href="#"
                                            style={{
                                                color: 'var(--text-muted)',
                                                textDecoration: 'none',
                                                fontSize: '0.9rem',
                                                transition: 'color 0.2s',
                                            }}
                                            onMouseOver={(e) =>
                                                ((e.target as HTMLAnchorElement).style.color = 'var(--primary-light)')
                                            }
                                            onMouseOut={(e) =>
                                                ((e.target as HTMLAnchorElement).style.color = 'var(--text-muted)')
                                            }
                                        >
                                            {item}
                                        </a>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>

                    {/* 会社情報 */}
                    <div>
                        <h4
                            style={{
                                fontSize: '0.9rem',
                                fontWeight: 600,
                                marginBottom: '20px',
                                color: 'var(--text-primary)',
                            }}
                        >
                            会社情報
                        </h4>
                        <ul
                            style={{
                                listStyle: 'none',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '12px',
                            }}
                        >
                            {['会社概要', '採用情報', 'お知らせ', 'プライバシーポリシー'].map((item, idx) => (
                                <li key={idx}>
                                    <a
                                        href="#"
                                        style={{
                                            color: 'var(--text-muted)',
                                            textDecoration: 'none',
                                            fontSize: '0.9rem',
                                            transition: 'color 0.2s',
                                        }}
                                        onMouseOver={(e) =>
                                            ((e.target as HTMLAnchorElement).style.color = 'var(--primary-light)')
                                        }
                                        onMouseOut={(e) =>
                                            ((e.target as HTMLAnchorElement).style.color = 'var(--text-muted)')
                                        }
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* お問い合わせ */}
                    <div>
                        <h4
                            style={{
                                fontSize: '0.9rem',
                                fontWeight: 600,
                                marginBottom: '20px',
                                color: 'var(--text-primary)',
                            }}
                        >
                            お問い合わせ
                        </h4>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '12px',
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    color: 'var(--text-muted)',
                                    fontSize: '0.9rem',
                                }}
                            >
                                <Mail size={16} />
                                contact@growthify.jp
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    color: 'var(--text-muted)',
                                    fontSize: '0.9rem',
                                }}
                            >
                                <Phone size={16} />
                                03-1234-5678
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    color: 'var(--text-muted)',
                                    fontSize: '0.9rem',
                                }}
                            >
                                <MapPin size={16} />
                                東京都渋谷区神宮前1-2-3
                            </div>
                        </div>
                    </div>
                </div>

                {/* コピーライト */}
                <div
                    style={{
                        borderTop: '1px solid var(--border-light)',
                        paddingTop: '30px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '20px',
                    }}
                >
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                        © 2025 GROWTHIFY Inc. All rights reserved.
                    </p>

                    <button
                        onClick={scrollToTop}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            background: 'transparent',
                            border: 'none',
                            color: 'var(--text-muted)',
                            cursor: 'pointer',
                            fontSize: '0.85rem',
                            transition: 'color 0.2s',
                        }}
                        onMouseOver={(e) =>
                            ((e.target as HTMLButtonElement).style.color = 'var(--primary-light)')
                        }
                        onMouseOut={(e) =>
                            ((e.target as HTMLButtonElement).style.color = 'var(--text-muted)')
                        }
                    >
                        <ChevronUp size={16} />
                        トップへ戻る
                    </button>
                </div>
            </div>
        </footer>
    );
}

// ========== メインApp ==========
export default function App() {
    return (
        <>
            <Header />
            <HeroSection />
            <ServicesSection />
            <StatsSection />
            <CaseStudiesSection />
            <CTASection />
            <Footer />
        </>
    );
}
