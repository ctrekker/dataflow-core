function utils_type(obj) {
    const t = typeof obj;
    if(t === 'object' && !Array.isArray(obj)) return 'dict';
    if(t === 'object') return 'array';
    if(t === 'number' && obj % 1 === 0) return 'int';
    if(t === 'number') return 'float';
    if(t === 'string') return 'string';
    return t;
}