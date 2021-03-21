import Validator from '../app.js';

test('правилный пароль', ()=>{
    let pass = new Validator('vb1_VB-12vb');
    expect(pass.validateUsername()).toBe(true);
});

test('пароль с цифры', ()=>{
    let pass = new Validator('1vb1_VB-12vb');
    expect(pass.validateUsername()).toBe(false);
});

test('пароль с -', ()=>{
    let pass = new Validator('-1vb1_VB-12vb');
    expect(pass.validateUsername()).toBe(false);
});

test('пароль с _', ()=>{
    let pass = new Validator('_1vb1_VB-12vb');
    expect(pass.validateUsername()).toBe(false);
});

test('пароль с тремя цифрами', ()=>{
    let pass = new Validator('b111vb1_VB-12vb');
    expect(pass.validateUsername()).toBe(false);
});

test('пароль с окончанием цифры', ()=>{
    let pass = new Validator('vb1_VB-12vb1');
    expect(pass.validateUsername()).toBe(false);
});

test('пароль с окончанием -', ()=>{
    let pass = new Validator('vb1_VB-12vb-');
    expect(pass.validateUsername()).toBe(false);
});

test('пароль с окончанием _', ()=>{
    let pass = new Validator('vb1_VB-12vb_');
    expect(pass.validateUsername()).toBe(false);
});

